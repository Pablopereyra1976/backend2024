import {
  verifyEmail,
  verifyMinLength,
  verifyString,
} from "../helpers/validations.helpers.js";
import ResponseBuilder from "../helpers/builders/responseBuilder.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import trasporterEmail from "../helpers/emailTransporter.helpers.js";
import ENVIROMENT from "../config/enviroment.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const registerConfig = {
      name: {
        value: name,
        error: [],
        validation: [
          verifyString,
          (field_name, field_value) =>
            verifyMinLength(field_name, field_value, 5),
        ],
      },

      password: {
        value: password,
        error: [],
        validation: [
          verifyString,
          (field_name, field_value) =>
            verifyMinLength(field_name, field_value, 10),
        ],
      },

      email: {
        value: email,
        error: [],
        validation: [
          verifyString,
          (field_name, field_value) => verifyEmail(field_name, field_value),
        ],
      },
    };
    let hayErrores = false;
    for (let field_name in registerConfig) {
      for (let validation of registerConfig[field_name].validation) {
        let result = validation(field_name, registerConfig[field_name].value);
        if (result) {
          hayErrores = true;
          registerConfig[field_name].error.push(result);
        }
      }
    }
    if (hayErrores) {
      const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(400)
        .setMessage("ERROR_VALIDATION")
        .setData({ registerState: registerConfig })
        .build();
      return res.json(response);
    }

    const hashedPassword = await bcrypt.hash(registerConfig.password.value, 10);
    /*se utiliza la libreria bcrypt para encriptar la contraseña*/

    const validationToken = jwt.sign(
      {
        email: registerConfig.email.value,
      },
      ENVIROMENT.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );

    const redirectUrl =
      `http://localhost:4000/api/auth/verify-email/` + validationToken;

    const result = await trasporterEmail.sendMail({
      subject: `valida tu email`,
      to: registerConfig.email.value,
      html: `<h1>valida tu email</h1> <p>Para validar tu mail da click <a href = "${redirectUrl}">aqui</a></p > `,
    });
    //luego ejecutar npm run dev
    console.log(result);

    const userCreated = new User({
      name: registerConfig.name.value,
      email: registerConfig.email.value,
      password: hashedPassword,
      verificationToken: validationToken, 
    });
    await userCreated.save();

    const response = new ResponseBuilder()
      .setCode("REGISTER_OK")
      .setOk(true)
      .setStatus(200)
      .setData({ registerResult: registerConfig })
      .build();
    return res.json(response);
  } catch (error) {
    if (error.code === 11000) {
      const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(400)
        .setMessage("EMAIL_EXIST")
        .setData({
          detail: "El email ya existe",
        })
        .build();
      return res.json(response);
    }
  }
  console.log(error);
};

console.log(
  bcrypt.compareSync(
    "pepe123456",
    "$2b$10$ezHMbYj1lbh3W7AC8/KWceAkHpLqEN6u/FXlzdl7Kh7/3WeQBQYwa"
  )
);
//compara la contraseña con la contraseña hasheada
console.log(ENVIROMENT);

export const verifyEmailController = async (req, res) => {
  try {
    const { validation_token } = req.params;
    console.log("token recibido para validar: ", validation_token);
    const payload = jwt.verify(validation_token, ENVIROMENT.SECRET_KEY);
    const email_to_verify = payload.email;
    const user_to_verify = await User.findOne({ email: email_to_verify });
    if (!user_to_verify) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    user_to_verify.emailVerified = true;
    await user_to_verify.save();
    res.send('<h1>email verificado exitosamente</h1>');
    //res.sendStatus(200);
    //res.redirect('URL_FRONT')
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Error al verificar el email" });
  }
}

export const loginController = async (req, res) => {
  try {
      const {email, password} = req.body
//validacionde datos (tarea)
const user = await User.findOne({email: email})
if(!user){
  res.sendStatus(404)
}

const isCorrectPassword = await bcrypt.compare(password, user.password)
  if(!isCorrectPassword){
    //throw o res.status(401).json
}
if(!user.emailVerified){
    res.status(403).json({message: "email no verificado"})
}
const access_token = jwt.sign({
  user_id: user._id,
  email: user.email,
  name: user.name
},
ENVIROMENT.SECRET_KEY,
{
  expiresIn: "1d" //esto determina cuanto dura la sesion
})

const response = new ResponseBuilder()
.setOk(true)
.setCode("LOGGED_SUCCESS!")
.setMessage("Login exitoso!")
.setStatus(200)
.setData({
  access_token: access_token,
  user_info:{
    user_id: user._id,
  email: user.email,
  name: user.name
  }
})
.build()
return res.status(200).json(response)
}
  



//recibir del body el email y la password
//validar estos datos
//buscar en la DB si existe un usuario con ese email
//comparar la password hasheada del usuario con la password recibida
//verificar si su emailVerified es verdadero (sino tirar error de logueo)
//generar un token de acceso con jwt donde guardemos datos como el user_id, nombre y el email
//responder exitosamente con el token de acceso

catch (error) {
  console.log(error)
  res.sendStatus(500)
}
}

/*
response = {
ok: true
status: 200
data: {
    token: '',
    user_info:{
    name,
    email,
    user_id
    } 
} */             
