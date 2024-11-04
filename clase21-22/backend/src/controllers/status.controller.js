export const postPingController = (req, res) => {
    
    console.log('consulta recibida en /api/status/controller/ping de tipo POST.body:', req.body)
    res.json({status:200, message:"pong", ok:true})
    
}