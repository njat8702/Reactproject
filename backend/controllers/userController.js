const userModel = require("../model/userModel");

const removeUser=(req,res)=>{
    const id=req.params.id;
    userModel.deleteUser(id,(err,result)=>{
        if(err)
            return res.status(500).json(err);
        res.json({message:"User Delete Successfully"})
    });
};
const fetchUser = ((req, res) => {
    userModel.getUsers((err, result) => {
        if(err){
            return res.status(500).json(err);
        }
        res.json(result);
    });
});
const createUser = ((req, res) => {
    const user = req.body;
    userModel.insertUser(user,(err, result) => {
        if(err){
            return res.status(500).json(err);
        }
        res.json({message: "User Inserted Successfully!"})
    });
});
const editUser = ((req, res)=> {
    const id = req.params;
    const user = req.body;
    userModel.updateUser(user,(err, result) => {
        if(err){
            return res.status(500).json(err);
        }
        res.json({message: "User updated Successfully"});
    });
});
module.exports = {createUser,fetchUser,removeUser,editUser}