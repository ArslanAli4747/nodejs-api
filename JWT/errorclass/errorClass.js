const {StatusCodes} = require("http-status-codes")
class customErrorApi extends Error{

    constructor(message){
        super(message)
    }
}

class unothorized extends customErrorApi{
    constructor(message){
        super(message)
        this.code = StatusCodes.UNAUTHORIZED
    }
}

class badrequest  extends customErrorApi{
    constructor(message){
        super(message)
        this.code = StatusCodes.BAD_REQUEST
    }
}


module.exports = {
    customErrorApi,
    unothorized,
    badrequest
}