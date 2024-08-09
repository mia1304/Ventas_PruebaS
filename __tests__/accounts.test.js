const { createAccount, deleteAccount, login, updateAccount, getAccounts } = require('../src/accounts');
describe('Account Management', () => {
//crear una nueva cuenta
  //Pruebas de Equivalencia de Clases, Transición de Estado
  test('should create a new account', () => {
    // caso válido (creacion de )
    const result = createAccount('usuario1', 'contraseña123');
    expect(result).toBe('Account created successfully');

    // Transición de Estado: verificar que la cuenta se haya creado correctamente
    const accounts = getAccounts();
    expect(accounts).toContainEqual({ usuario: 'usuario1', contraseña: 'contraseña123' });

    //caso inválido (usuario ya existe)
    const duplicateResult = createAccount('usuario1', 'otraContraseña');
    expect(duplicateResult).toBe('Account already exists');
  });

//eliminar una cuenta
  //Pruebas de Equivalencia de Clases, Transición de Estado
  test('should delete an account', () => {
    // caso válido
    createAccount('usuario1', 'contraseña123');
    const result = deleteAccount('usuario1');
    expect(result).toBe('Account deleted successfully');

    // Transición de Estado: verificar que la cuenta se haya eliminado correctamente
    const accounts = getAccounts();
    expect(accounts).not.toContainEqual({ usuario: 'usuario1', contraseña: 'contraseña123' });

    //caso inválido (usuario no existe)
    const nonExistentResult = deleteAccount('usuarioNoExistente');
    expect(nonExistentResult).toBe('Account not found');
  });

//iniciar sesión con una cuenta existente
  //Pruebas de Equivalencia de Clases
  test('should log in with an existing account', () => {
    //caso válido
    createAccount('usuario1', 'contraseña123');
    const result = login('usuario1', 'contraseña123');
    expect(result).toBe(true);

    //caso inválido (contraseña incorrecta)
    const wrongPasswordResult = login('usuario1', 'contraseñaIncorrecta');
    expect(wrongPasswordResult).toBe(false);

    //caso inválido (usuario no existe)
    const nonExistentUserResult = login('usuarioNoExistente', 'contraseña123');
    expect(nonExistentUserResult).toBe(false);
  });

//actualizar la contraseña de una cuenta
  //Pruebas de Equivalencia de Clase, Transición de Estado
  test('should update account information', () => {
    //caso válido
    createAccount('usuario1', 'contraseña123');
    const result = updateAccount('usuario1', 'nuevaContraseña123');
    expect(result).toBe('Account updated successfully');

    // Transición de Estado: verificar que la cuenta se haya actualizado correctamente
    const accounts = getAccounts();
    expect(accounts).toContainEqual({ usuario: 'usuario1', contraseña: 'nuevaContraseña123' });

    //caso inválido (usuario no existe)
    const nonExistentResult = updateAccount('usuarioNoExistente', 'nuevaContraseña123');
    expect(nonExistentResult).toBe('Account not found');

    //caso inválido (nueva contraseña vacía)
    const emptyPasswordResult = updateAccount('usuario1', '');
    expect(emptyPasswordResult).toBe('Invalid password');
  });
});
