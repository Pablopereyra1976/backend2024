/*fetch y async*/

/*que es fetch?
es nativa, y permite transferir datos de una url a un servidor. emite consultas http

await (aguardame)
get (obtener)ca

las promesas tienen estados
-pending => indica que dicha promesa aun esta pendiente de resolucion
-resolved => indica que la promesa fue resuelta
-rejected => indica que la promesa fue rechazada

swape.dev (api)
*/
const obtenerPersonaje = async () => {
    const respuesta = await fetch('https://swapi.dev/api/people/1', {
        method: 'GET',
    })
    const data = await respuesta.json()
    return data

}

const obtenerPagina = async () => {
    const respuesta = await fetch('https://swapi.dev', {
        method: 'GET',
    })
    console.log('persona2', respuesta)
}
const renderizarPersonaje = async () => {
    const { name } = await obtenerPersonaje()

    document.write(name)

}
renderizarPersonaje()


obtenerPersonaje()

/*callback es una funcion pasada por parametro*/

const usuarios = [
    {
        nombre: 'pedro',
        apellido: 'perez',
        edad: 20
    },
    {
        nombre: 'juan',
        apellido: 'perez',
        edad: 20
    },
]

console.log(usuarios)
/* for each recibe una funcion, la cual invocara por detras*/
usuarios.forEach((usuario, indice, listaDeUsuarios) => {
    console.log('hola desde un forEach',indice)
})
/*fliter retorna un array*/
const filterPro = (array, accionCallbackFn) => {
    const resultado = []
    for(const elemento of array){
        if(accionCallbackFn(elemento)){
            resultado.push(elemento)   
}
    }
    return resultado
}
const resultado = filterPro(usuarios, (usuario) => {
return usuario.nombre === 'pedro'
})