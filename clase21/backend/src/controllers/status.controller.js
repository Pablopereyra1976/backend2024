export const postPingController = (req, res) => {
    console.log('consulta recibida en /ping de tipo POST.body:', req.body)
    res.json({status:200, message:"pong", ok:true})
    
}