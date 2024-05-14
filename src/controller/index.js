const controller = {}
const service = require('../service')

controller.panggilNama = (req,res) => {
    try {
        const fullName = req.body.nama
        const lastName = req.params.lastName
        const result = service.panggilNama(fullName,lastName)


        res.status(200).json({
            message: result
        })
    } catch (error) {
        helper.controllerErrorHandler(error,res)
    }
}

controller.registrasi = (req,res) => {
    try {
        const {firstName, lastName, userName, password, verifikasiPassword} = req.body
        const verifikator = service.validasiPassword(password, verifikasiPassword)
        if(!verifikator) res.status(400).json({message: "password tidak sesuai"})
        
            res.status(200).json({message:'Berhasil registrasi'})
    } catch (error) {
        helper.controllerErrorHandler(error,res)
    }
}

module.exports = controller