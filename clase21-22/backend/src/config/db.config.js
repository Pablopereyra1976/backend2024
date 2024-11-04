//logica de conexion con la DB
import mongoDB from 'mongoose'
import User from '../models/user.model.js'

const MONGO_URL = 'mongodb://localhost:27017/TN_PWA_PRUEBA_MONGOOSE'

//.connect se utiliza para establecer una conexion con la DB
//recibe un connection_string o un objeto

mongoDB.connect(MONGO_URL, {})
.then(async() => {
        console.log('se establecio la conexion con mongoDB')
        const existingUser = await User.findOne({ email: "pepe@gmail.com" });
        if (existingUser) {
            console.log('El usuario ya existe con el email pepe@gmail.com');
        } else {
            // Si no existe, crearlo
            const userCreate = new User({ name: "pepe", email: "ppe@gmail.com", password: "pepe123", verificationToken: " " });
            await userCreate.save();
            console.log('Usuario creado correctamente');
        }
    }
)
.catch((error) =>
    console.error('la conexion con mongoDB fallo', error)
)
.finally(() => {
    console.log('el proceso de conexion con la DB esta finalizado')
})

export default mongoDB