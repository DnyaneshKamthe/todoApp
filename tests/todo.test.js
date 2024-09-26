const { app } = require("../index");
const http = require("http");
const request = require('supertest');
const {  addToDo, getToDo, getToDoById, updateToDo, deleteToDo } = require("../controllers/todo.controller")

jest.mock("../controllers/todo.controller", () => ({
    addToDo: jest.fn().mockImplementation((req, res) => {
        const { title, description, dueDate, completed } = req.body;

        if (!title || !description || !dueDate) {
            res.status(400).json({ message: "Invalid data" });
        } else {
            const newTodo = {
                id: "todoId123",
                title,
                description,
                dueDate,
                completed: completed || false,
                userId: req.user ? req.user.id : "defaultUserId"
            };
            res.status(201).json({ message: "Todo created successfully", newTodo });
        }
    }),
    
    getToDo: jest.fn().mockImplementation((req, res) => {
        const todos = [
            { id: "todo1", title: "Todo 1", description: "Description 1", dueDate: "2024-10-01", userId: "testUserId" },
            { id: "todo2", title: "Todo 2", description: "Description 2", dueDate: "2024-10-02", userId: "testUserId" },
        ];

        res.status(200).json(todos);
    }),
    

    getToDoById: jest.fn().mockImplementation((req, res) => {
        const { id } = req.params;

        if (id === "todo1") {
            const todo = {
                id: "todo1",
                title: "Todo 1",
                description: "Description 1",
                dueDate: "2024-10-01",
                userId: "testUserId"
            };
            res.status(200).json(todo);
        } else {
            res.status(404).json({ message: `Todo with id ${id} not found` });
        }
    }),


    updateToDo: jest.fn().mockImplementation((req, res) => {
        const { id } = req.params;
        const { title, description, dueDate, completed } = req.body;

        if (!title && !description && !dueDate && completed === undefined) {
            return res.status(400).json({ message: "No fields to update" });
        }

        const updatedTodo = {
            id,
            title: title || "Updated Todo",
            description: description || "Updated description",
            dueDate: dueDate || "2024-10-01",
            completed: completed || false,
        };

        res.status(200).json({ message: "Todo updated successfully", updatedTodo });
    }),
    
    deleteToDo: jest.fn().mockImplementation((req, res) => {
        const { id } = req.params;
        res.status(200).json({ message: `Todo with id ${id} deleted successfully` });
    })
}));

jest.mock("../middlewares/checkAuth", () => (req, res, next) => {
    req.user = { id: "testId", username: "testing" };
    next(); 
});



let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});
afterAll((done) => {
    server.close(done);
});

describe("API testing for ToDo controllers", () => {

    it("Should be able to add a new todo", async () => {
        const res = await request(server).post("/api/todos").send({
            title: "Test Todo",
            description: "Test Description",
            dueDate: "2024-10-01",
            completed: false
        }) .set("Authorization", "Bearer fake-jwt-token");

        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual({
            message: "Todo created successfully",
            newTodo: {
                id: "todoId123",
                title: "Test Todo",
                description: "Test Description",
                dueDate: "2024-10-01",
                completed: false,
                userId: "testId" 
            }
        });
    });

    it("Should fail to add a todo with missing fields", async () => {
        const res = await request(server).post("/api/todos").send({
            title: "Test Todo"
        });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({ message: "Invalid data" });
    });

    it("Should get all todos", async () => {
        const res = await request(server).get("/api/todos");

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(2);
        expect(res.body[0]).toEqual({
            id: "todo1",
            title: "Todo 1",
            description: "Description 1",
            dueDate: "2024-10-01",
            userId: "testUserId"
        });
    });


    it("Should get a todo by ID", async () => {
        const res = await request(server).get("/api/todos/todo1");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            id: "todo1",
            title: "Todo 1",
            description: "Description 1",
            dueDate: "2024-10-01",
            userId: "testUserId"
        });
    });

    it("Should return 404 if todo with ID is not found", async () => {
        const res = await request(server).get("/api/todos/invalidId");

        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual({
            message: "Todo with id invalidId not found"
        });
    });


    it("Should be able to update a todo", async () => {
        const res = await request(server).put("/api/todos/todoId123").send({
            title: "Updated Todo",
            completed: true
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            message: "Todo updated successfully",
            updatedTodo: {
                id: "todoId123",
                title: "Updated Todo",
                description: "Updated description",
                dueDate: "2024-10-01",
                completed: true
            }
        });
    });

    it("Should not update if no fields are provided", async () => {
        const res = await request(server).put("/api/todos/todoId123").send({});

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({ message: "No fields to update" });
    });

    it("Should delete a todo", async () => {
        const res = await request(server).delete("/api/todos/todoId123");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: "Todo with id todoId123 deleted successfully" });
    });
});