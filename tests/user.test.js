const { app } = require("../index");
const http = require("http");
const request = require('supertest');
const { signUp, login, logout } = require("../controllers/user.controller");


jest.mock("../controllers/user.controller", () => ({
    signUp: jest.fn().mockImplementation((req, res) => {
        res.status(201).json({ message: "User created successfully" });
    }),
    login: jest.fn().mockImplementation((req, res) => {
        const { username, password } = req.body;
        // Mocked validation for demonstration purposes
        if (username === "testing" && password === "testing123") {
            const token = "fake-jwt-token"; 
            const user = { id: "testId", username: "testing", email: "testing123" }
            res.status(200).json({ message: "User logged in successfully", token, user });
        } else {
            res.status(400).json({ message: "Invalid credentials" });
        }
    }),
    logout: jest.fn().mockImplementation((req, res) => {
        res.status(200).json({ message: "User logged out successfully" });
    }),
}));




let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});
afterAll((done) => {
    server.close(done);
});

describe("API testing for user controllers", () => {
    it("Should be able to signup", async () => {
        const res = await request(server)
            .post("/api/users/signup")
            .send({
                username: "testing",
                email: "testing@mail.com",
                password: "testing123",
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual({ message: "User created successfully" });
    });

    it("Should be able to login with valid credentials", async () => {
        const res = await request(server).post("/api/users/login").send({
            username: "testing",
            password: "testing123"
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            message: "User logged in successfully",
            token: "fake-jwt-token",
            user : {
                id: "testId",
                username: "testing",
                email: "testing123"
            }
        });
    });

    it("Should not be able to login with invalid credentials", async () => {
        const res = await request(server).post("/api/users/login").send({
            username: "invalidUser",
            password: "wrongPassword"
        });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({
            message: "Invalid credentials"
        });
    });

    it("Should be able to logout", async () => {
        const res = await request(server).post("/api/users/logout");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            message: "User logged out successfully"
        });
    });
})