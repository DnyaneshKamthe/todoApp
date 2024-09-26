function validateToDoCreation (title, description, dueDate, userId){
    if(!title || typeof title !== 'string'){
        return 'Title is required and should be a string.'
    }
    if(!description || typeof description !== 'string'){
        return 'Description is required and should be a string.'
    }
    if(!dueDate || typeof dueDate !== 'string'){
        return 'Due date is required and should be a string in the format YYYY-MM-DD.'
    }
}

function validateUpdateTodo(data){
    let errors = [];
    if (data.title !== undefined) {
        if (typeof data.title !== 'string' || data.title.trim() === '') {
            errors.push('Title must be a non-empty string.');
        }
    }

    if (data.description !== undefined) {
        if (typeof data.description !== 'string') {
            errors.push('Description must be a string.');
        }
    }
    if (data.dueDate !== undefined) {
        const parsedDate = Date.parse(data.dueDate);
        if (isNaN(parsedDate)) {
            errors.push('Due date must be a valid date.');
        }
    }
    if (data.completed !== undefined) {
        if (typeof data.completed !== 'boolean') {
            errors.push('Completed must be a boolean.');
        }
    }
    return errors.length > 0 ? errors : null;
}

module.exports = {
    validateToDoCreation,
    validateUpdateTodo
}