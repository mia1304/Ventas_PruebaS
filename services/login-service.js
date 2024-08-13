// services/login-service.js

function login(user, authenticateUser) {
    if (!user.username || !user.password) {
        throw new Error('Username and password are required');
    }

    const isAuthenticated = authenticateUser(user);

    if (!isAuthenticated) {
        throw new Error('Invalid credentials');
    }

    return true;
}

module.exports = { login };

