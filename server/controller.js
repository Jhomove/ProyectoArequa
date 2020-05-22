const   db          = require('mongoose'),
        model       = require('./model'),
        response    = require('./response'),
        md5         = require('md5')

db.Promise = global.Promise
db.connect('mongodb+srv://turnos_admin:turnos_admin@cluster0-16idh.mongodb.net/arequa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('[controller] Conectado a la base de datos')

module.exports = {
    register: async (userData, res) => {
        if(!userData.email || !userData.name || !userData.password) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'Datos vacios',
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

        const user = new model.User({...userData, registerDate : new Date()})
        user.save()
        console.log('[controller] Usuario creado', user)
        response.success({
            response: res,
            body    : 'Usuario creado'
        })
    },
    login: async (userData, res) => {
        if(!userData.email || !userData.password) {
            response.error({
                response     : res,
                status       : 400,
                body         : 'Datos vacios',
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
    }
}