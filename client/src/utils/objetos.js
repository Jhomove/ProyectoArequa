/*
    Obj = Objeto a recorrer
    keys = Array con ruta para recorrer el objeto, no repetir nombres de propiedades
    newValue = nuevo valor a actualizar en la propiedad
*/
export const actualizarPropiedadObjeto = (obj,keys,newValue) => {
    let aux = obj;
    try {
        keys.map((k,i) => {
            if(!validatePropObjetctIsNumber(keys[i]))
                aux[keys[i]]  = createArray(aux,keys[i], keys[ i + 1 ]) ;
            if(validatePropObjetctIsNumber(keys[i]) &&  aux[keys[i]] === undefined){
                createPropObject(aux,keys[i], keys[ i + 1 ]);
            }
            if(k === keys[ keys.length -1 ])
                aux[keys[i]] = newValue;
            aux = aux[keys[i]] !== undefined && aux[keys[i]] !== null ? aux[keys[i]] : aux;
        })
    } catch (error) {
        return false;
    }
    return true;
}

export const validarPropiedadObjeto = (obj,keys) => {
    let aux = obj;
    try {
        let status = true;
        keys.every((k,i) => {
            if(aux[k] === undefined){
                status = false;
                return false;
            }
            if(k === keys[ keys.length -1 ]){
                status = aux[k] !== undefined && aux[k] !== "" ? true : false;
                return false;
            }
            status = true;
            aux = aux[keys[i]] !== undefined && aux[keys[i]] !== null ? aux[keys[i]] : aux;
            return true;
        })
        return status;
    } catch (error) {
        return false;
    }
}

export const getValueObject = (obj,keys) => {
    let aux = obj;
    let value = null;
    keys = keys.split('.')
    try {
        keys.every((k,i) => {
            if(aux[k] === undefined){
                value = null;
                return false;
            }
            if(k === keys[ keys.length -1 ]){
                value = aux[k] !== undefined ? aux[k] : null;
                return false; 
            }
            value = null;
            aux = aux[keys[i]] !== undefined && aux[keys[i]] !== null ? aux[keys[i]] : aux;
            return true;
        })
    } catch (error) {
        value = null;
    }
    return value;
}

/*
    key = propiedad a validar
*/
const validatePropObjetctIsNumber = key => !isNaN(parseInt(key)) ? true : false;

/*
    obj = elemento sobre el cual se va a crear el nuevo objeto
    key = propieda actual
    proxima propiedad para verificar si es string, si es string es porque el padre es un array el elemento a crear es un objeto
*/
const createPropObject = (obj, key, nextKey) => !validatePropObjetctIsNumber(nextKey) ? obj.push({[nextKey]: ''}) : null;

const createArray = (obj,key,nextKey) =>  !validatePropObjetctIsNumber(key) && validatePropObjetctIsNumber(nextKey) && obj[key] === undefined ? obj[key] = [] : obj[key];
