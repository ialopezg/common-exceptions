const { Router, json } = require('express');
const { BadRequest } = require('custom-error-service');

const router = Router();

router.post('/login', (request, response) => {
  const { email, password } = request.body;

  // No data sent
  if (!email || !password) {
    throw new BadRequest(
      'Error al inciar la sesion',
      'El nombre de usuario o contraseña son inválidos',
    );
  }

  // Invalid data
  if (email !== 'john.doe@example.site' || password !== 'password') {
    throw new BadRequest(
      'Error al inciar la sesion',
      'El nombre de usuario o contraseña son inválidos',
    );
  }

  response.status(200).json({
    message: 'User logged successfuly!',
  });
});

module.exports = router;
