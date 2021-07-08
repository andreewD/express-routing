class Auth{

    static validate(req,res,next){

        //middleware logic will be written here

        console.log("From auth");
        next();
    }

}
module.exports=Auth;