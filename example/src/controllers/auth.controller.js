const { Module } = require('module');

const login = async (req, res = response) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    //     // Validar si existe usuario
    //     const user = await User.findOne({ email });
    //     if (!user) {
    //       throw new CustomError({statusCode: 404, message: 'El nombre de usuario o contraseña son inválidos'});
    //     }
    //     // Validar password
    //     const passValido = bcryptjs.compareSync(password, user.password);
    //     if (!passValido) {
    //       throw WrongUsernameOrPasswordEception();
    //     }
    //     //Validar si el usuario esta activo
    //     if (!user.status) {
    //       throw new InactiveAccountException();
    //     }
    //     // Generar JWT
    //     const token = await generarJWT(user.id);
    //     if (user.forgotpassword) {
    //       user.forgotpassword = false;
    //       await user.save();
    //     }
    //     res.json({
    //       user,
    //       token,
    //     });
  } catch (error) {
    console.log(error);
    throw new InternalServerError();
  }
};

Module.exports = { login };
