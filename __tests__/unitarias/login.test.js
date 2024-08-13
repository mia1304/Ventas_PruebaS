// test/unitarias/login.test.js

const { login } = require('../../services/login-service');

describe('Pruebas de inicio de sesión', () => {
    test('Debe iniciar sesión con credenciales correctas', () => {
        const mockUser = { username: 'testuser', password: 'password123' };
        const authenticateUser = jest.fn().mockReturnValue(true);

        const result = login(mockUser, authenticateUser);
        expect(result).toBe(true);
    });

    test('Debe fallar con credenciales incorrectas', () => {
        const mockUser = { username: 'testuser', password: 'wrongpassword' };
        const authenticateUser = jest.fn().mockReturnValue(false);

        expect(() => login(mockUser, authenticateUser)).toThrow('Invalid credentials');
    });

    test('Debe lanzar un error si faltan las credenciales', () => {
        expect(() => login({}, jest.fn())).toThrow('Username and password are required');
    });
});
