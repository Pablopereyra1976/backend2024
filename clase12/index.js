import fs from 'fs/promises';
import {crearJson, leerJson} from './utils/filesystemManager.js';
  
const main = async () => {
    const filename = 'data';
    const data = [];
    const newData = [{
        id: 1,
        name: 'pedro',
        age: 25
    },
    {
        id: 2,
        name: 'juan',
        age: 30
    }];
    data.push(...newData);
    await crearJson(filename, data);
    await leerJson(filename);
};
main().catch(error => {
    console.error('ocurrio un error:', error);
});
