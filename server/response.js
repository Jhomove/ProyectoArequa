const success = (args) => {
    args.response.status(args.status || 201).send({
        success: true,
        body: args.body || 'Operación exitosa'
    })
}

const error = (args) => {
    args.response.status(args.status || 500).send({
        success: false,
        body: args.body || 'Parametros incorrectos'
    })
}

module.exports = {error, success}