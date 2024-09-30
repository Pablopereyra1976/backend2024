import fs from 'fs/promises';

//crear archivo
//filesystem.promises.writeFile(filename, data,  {encoding:'utf-8'})
//leer archivos
//filesystem.promises.readFile(filename, {encoding:'utf-8'})

//Crear la sig funcion
const crearJson = async (filename, data) => {
    const file = filename + '.json';
    try {
        if(!filename){
            throw {code: 'err_invalid_arg_type', detail: 'falta filename en crearJson, se esperaba un dato verdadero pero recibido' + filename}
        }
        if(!data){
            throw {code: 'err_invalid_arg_type', detail: 'falta data en crearJson, se esperaba un dato verdadero pero recibido' + data}
        }
        await fs.writeFile(file, JSON.stringify(data, null, 2), { encoding: 'utf-8' });
        console.log('El archivo se ha registrado con éxito:', file);
    } catch (error) {
        console.error('Error al escribir el archivo:', error);
    }
};





//Debe crear a un archivo llamado data.json con el contenido: []

const leerJson = async(filename) => {
    const file = filename + '.json';
    try {
        const data = await fs.readFile(file, { encoding: 'utf-8' });
        console.log('Contenido del archivo:', JSON.parse(data));
    } catch (error) {
        console.error('Error al leer el archivo:', error);
    }
};


//Ejemplo de uso
//crearJson('data', [])
//ejemplo de uso
//leerJson('data')
//Debe devolver el contenido de data.json

export { crearJson, leerJson }