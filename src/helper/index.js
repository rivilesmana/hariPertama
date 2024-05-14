const helper = {}

helper.controllerErrorHandler = () => {
    console.log(error);
    resizeBy.status(500).json({
        message: error.message
    })
}

module.exports = helper