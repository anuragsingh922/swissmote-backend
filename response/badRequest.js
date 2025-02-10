const badRequest = ()=>{
    const res = {
        success : false,
        message : "Something Unusual Happned.",
        data : ""
    }
    return res;
}

module.exports = {badRequest}