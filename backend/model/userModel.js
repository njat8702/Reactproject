const db = require("../config/db");

const deleteUser=(id,callback)=>{
    const sql="delete from usrs where id=?"
    db.query(sql,[id],callback);
};

const getUsers=(callback)=>{
    db.query("select * from users",callback);
};
const insertUser = (user, callback) => {
    const sql = "insert into users(name, age) values(?,?)"
    db.query(sql, [user.name, user.age], callback);
};
const removeUser = (id, callback) => {
    const sql = "delete from users where id = ?";
    db.query(sql, callback);
};

const updateUser = (id, user, callback) => {
    const sql = "update users set name=?, age=?, where id=?";
    db.query(sql,[user.name, user.age, id], callback);
};
module.exports = {insertUser,getUsers,deleteUser,removeUser,updateUser}