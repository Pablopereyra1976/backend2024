export const registerController = (req, res) => {
    const {name, password, email} = req.body

//tarea/todo
//validar name, password, email

    console.log(name, password, email)

    res.json({ok:true})}