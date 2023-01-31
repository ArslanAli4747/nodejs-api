const {StatusCodes} = require("http-status-codes")

class customErrorApi extends Error{
    constructor(message){
        super(message)
    }
}


class badRequest extends customErrorApi{
    constructor(message){
        super(message)
        this.code = StatusCodes.BAD_REQUEST
    }
}


class unAuthenticate extends customErrorApi{
    constructor(message){
        super(message)
        this.code = StatusCodes.UNAUTHORIZED
    }
}

module.exports={
    customErrorApi,
    badRequest,
    unAuthenticate
}