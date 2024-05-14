const service = {}

service.panggilNama=(nama, lastName) => {
    try {
        return `Halo ${nama} ${lastName}`
    } catch (error) {
        throw error
    }
}

service.validasiPassword = (password, verifikasiPassword) => {
    try {
        return password == verifikasiPassword? true : false
    } catch (error) {
        throw error        
    }
}
module.exports = service
