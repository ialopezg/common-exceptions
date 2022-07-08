const { Router } = require('express');
const { BadRequestException, PreconditionFailedException } = require('custom-error-service');

const router = Router();

router.post('/login', (request, response) => {
  const { email, password } = request.body;

  // No data sent
  if (!email || !password) {
    throw new PreconditionFailedException(
      'Error al inciar la sesion',
      { details: { message: 'El nombre de usuario o contraseña son inválidos', path: 'login' } },
    );
  }

  // Invalid data
  if (email !== 'john.doe@example.site' || password !== 'password') {
    throw new BadRequestException(
      'Error al inciar la sesion',
      { details: { message: 'El nombre de usuario o contraseña son inválidos', path: 'login' } },
    );
  }

  response.status(200).json({
    message: 'User logged successfuly!',
  });
});

module.exports = router;
