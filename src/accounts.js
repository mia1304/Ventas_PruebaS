let accounts = [];

// Función para crear una nueva cuenta
function createAccount(usuario, contraseña) {
  // Verifica si ya existe una cuenta con el mismo nombre de usuario
  if (accounts.some(account => account.usuario === usuario)) {
    return 'Account already exists'; // Si ya existe, devuelve un mensaje de error
  }
  // Agrega la nueva cuenta al arreglo de cuentas
  accounts.push({ usuario, contraseña });
  return 'Account created successfully'; // Devuelve un mensaje de éxito
}

// Función para eliminar una cuenta
function deleteAccount(usuario) {
  // Almacena la longitud inicial del arreglo de cuentas
  const initialLength = accounts.length;
  // Filtra las cuentas para eliminar la cuenta con el nombre de usuario especificado
  accounts = accounts.filter(account => account.usuario !== usuario);
  // Comprueba si la longitud del arreglo ha disminuido (lo que indica que se eliminó una cuenta)
  return accounts.length < initialLength ? 'Account deleted successfully' : 'Account not found'; // Devuelve un mensaje de éxito o error según el caso
}

// Función para iniciar sesión con una cuenta existente
function login(usuario, contraseña) {
  // Verifica si existe una cuenta con el nombre de usuario y contraseña especificados
  return accounts.some(account => account.usuario === usuario && account.contraseña === contraseña);
}

// Función para actualizar la contraseña de una cuenta
function updateAccount(usuario, nuevaContraseña) {
  // Busca la cuenta con el nombre de usuario especificado
  const account = accounts.find(account => account.usuario === usuario);

  // Si la cuenta no existe, devuelve un mensaje de error
  if (!account) {
    return 'Account not found';
  }

  // Verifica que la nueva contraseña no esté vacía o compuesta solo por espacios en blanco
  if (!nuevaContraseña || nuevaContraseña.trim() === '') {
    return 'Invalid password';
  }

  // Actualiza la contraseña de la cuenta
  account.contraseña = nuevaContraseña;
  return 'Account updated successfully'; // Devuelve un mensaje de éxito
}

// Función para obtener todas las cuentas
function getAccounts() {
  // Devuelve el arreglo de cuentas
  return accounts;
}

// Exporta las funciones para que puedan ser utilizadas en otros archivos
module.exports = { createAccount, deleteAccount, login, updateAccount, getAccounts };
