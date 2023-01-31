

class errorHandlerApi extends Error{

    constructor(message,code){
        super(message)
        this.code = code
    }
}

const errorHandlerFn = (message,code)=>{
    return new errorHandlerApi(message,code)
}

module.exports = {
    errorHandlerApi,errorHandlerFn
}