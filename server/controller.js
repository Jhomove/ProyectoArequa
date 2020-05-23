const   db       = require('mongoose'),
        model    = require('./model'),
        response = require('./response'),
        md5      = require('md5')

db.Promise = global.Promise
db.connect('mongodb+srv://turnos_admin:turnos_admin@cluster0-16idh.mongodb.net/arequa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('[controller] Conectado a la base de datos')

const isObject = (obj) => {
    return typeof obj === 'object' && obj !== null
}

const saveInfo = (args = {}) => {
    const element = new model[args.model]({...args.data, created : new Date()})
    element.save()
    console.log(`[controller] ${args.name} creado`, element)
    response.success({
        response: args.res,
        body    : `${args.name} creado`
    })
}

const isValidCourse = (userData, res) => {
    if(!userData.title || !userData.sections || !userData.author) {
        response.error({
            response     : res,
            status       : 400,
            body         : 'Titulo, secciones y autor son datos obligatorios',
        })
        return false
    }

    if(!userData.sections.length) {
        response.error({
            response     : res,
            status       : 400,
            body         : 'El curso debe contener al menos una sección',
        })
        return false
    }

    for(const value of userData.sections) {
        if(!value.title) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'Todas las secciones deben contener un titulo',
            })
            return false
        }

        if(!value.content) {
            response.error({
                response     : res,
                status       : 400,
                body         : `La sección ${value.title} no tiene contido legible`,
            })
            return false
        }

        if(!(value.content instanceof Array)) {
            response.error({
                response     : res,
                status       : 400,
                body         : `La sección ${value.title} debe contener un array`,
            })
            return false
        }

        if(!value.content.length) {
            response.error({
                response     : res,
                status       : 400,
                body         : `La sección ${value.title} esta vacía`,
            })
            return false
        }

        for(const resources of value.content) {
            if(!resources.name || !resources.type) {
                response.error({
                    response     : res,
                    status       : 400,
                    body         : `El contenido de ${value.title} no cuenta con nombre o tipo`,
                })
                return false
            }
        }
        return true
    }
}

module.exports = {
    register: async (userData = {}, res) => {
        if(!userData.email || !userData.name || !userData.password) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'Correo, nombre o contraseña vacios',
            })
            return
        }

        const registeredUser = await model.User.findOne({
            email: userData.email
        })

        console.log(registeredUser)
        if(registeredUser) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'El correo suministrado ya está en uso',
            })
            return
        }

        userData.password = md5(userData.password)

        saveInfo({
            data  : userData,
            model : 'User',
            name  : 'Usuario',
            res
        })
    },
    login: async (userData = {}, res) => {
        if(!userData.email || !userData.password) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'Correo o contraseña vacios',
            })
            return
        }

        const user = await model.User.findOne({
            email: userData.email
        })

        console.log(user)
        if(!user) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'El correo no se encuentra registrado',
            })
            return
        }

        if(user.password !== md5(userData.password)) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'Contraseña incorrecta',
            })
            return
        }

        delete user.password

        response.success({
            response: res,
            body    : user
        })
    },
    getAnnouncements: async (res) => {
        const announcements = await model.Announcements.find({})
        response.success({
            response: res,
            body    : announcements
        })
    },
    createAnnouncement: async (userData = {}, res) => {
        if(!userData.title || !userData.description || !userData.author) {
            response.error({
                response: res,
                body    : 'Titulo, descripción y autor son datos obligatorios'
            })
            return
        }

        if(!isObject(userData.author)) {
            response.error({
                response: res,
                body    : 'Autor debe ser una estructura de tipo objeto con propiedades nombre y correo'
            })
            return
        }

        if(!userData.author.name || !userData.author.email) {
            response.error({
                response: res,
                body    : 'Falta nombre o correo del autor'
            })
            return
        }

        saveInfo({
            data  : userData,
            model : 'Announcements',
            name  : 'Anuncio',
            res
        })
    },
    createCourse: async (userData, res) => {
        if(isValidCourse(userData, res)) {
            saveInfo({
                data  : userData,
                model : 'Course',
                name  : 'Curso',
                res
            })
        }
    },
    getUserCourses: async (userData, res) => {
        if(!userData.email) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'No se recibió correo del usuario',
            })
            return
        }

        const courses = await model.Course.find({'author.email': userData.email})
        response.success({
            response: res,
            body    : courses
        })
    },
    updateCourse: async (userData, res) => {
        if(!userData._id) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'No se recibió id de curso',
            })
            return
        }

        if(!isValidCourse(userData, res)) return

        const updated = await model.Course.replaceOne({_id: db.Types.ObjectId(userData._id)}, userData)
        if(!updated.nModified) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'No se encontró ningun curso con el id proporcionado',
            })
            return
        }

        response.success({
            response: res,
            body    : 'Curso actualizado'
        })
    }
}