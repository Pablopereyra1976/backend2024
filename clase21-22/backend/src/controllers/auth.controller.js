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
         expiresIn: "1d" 
        }
    )


    const redirectUrl = `http://localhost:4000/api/auth/verify-email/` + validationToken;


    const result = await trasporterEmail.sendMail({
      subjet: `valida tu email`,
      to: registerConfig.email.value,
      html: `<h1>valida tu email</h1> <p>Para validar tu mail da click <a href = "${redirectUrl}">aqui</a></p > `,
    });
    //luego ejecutar npm run dev
    console.log(result);

    const userCreated = new User({
      name: registerConfig.name.value,
      email: registerConfig.email.value,
      password: hashedPassword,
      verificationToken: " ",
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
    console.log(error);
  }
};

console.log(
  bcrypt.compareSync(
    "pepe123456",
    "$2b$10$ezHMbYj1lbh3W7AC8/KWceAkHpLqEN6u/FXlzdl7Kh7/3WeQBQYwa"
  )
);
//compara la contraseña con la contraseña hasheada
console.log(ENVIROMENT);
