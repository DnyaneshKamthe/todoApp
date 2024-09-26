function validateUserSignUp(username, email, password){
    if(!username || typeof username !== 'string'){
        return 'username is required and should be a string'
    }
    if(!email || typeof email !== 'string'){
        return 'email is required and should be a string'
    }
    if (!validateEmailFormat(email)) {
        return 'Invalid email format';
    }
    if(!password || typeof password !== 'string'){
        return 'password is required and should be a string'
    }
    return null;
}

// Validate email format using regex
function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//validate login inputs
function validateLoginInput(username, password) {
    if (!username || typeof username !== 'string') {
        return 'Username is required and should be a string';
    }
    if (!password || typeof password !== 'string') {
        return 'Password is required and should be a string';
    }
    return null;
}

module.exports = {
    validateUserSignUp,
    validateLoginInput
}