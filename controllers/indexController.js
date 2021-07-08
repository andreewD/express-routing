class IndexController{
    static index(req,res){
        res.send("IndexController");

    }


    static home(req,res){
        res.send("HomeController");
    }
}


module.exports=IndexController;