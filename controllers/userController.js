const users = require("../models/userSchema")

exports.postuser = async(req,res)=>{
const file = req.file.filename;
const {fname,lname,email,mobile,gender,location,status} = req.body;
if(!fname || !lname || !email || !mobile || !gender){
    res.status(401).json("All Input is required")
}
try {
    const existuser = await users.findOne({email: email})
    if(existuser){
        res.status(401).json("This user already exists")
    }
    else{
        const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
        const newuser = new users({
            fname,lname,email,mobile,gender,location,status
        })
        newuser.save()
    }
    
} catch (error) {
    res.status(404).json("Error: " + error.message)
}
}