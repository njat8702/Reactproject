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
}
module.exports = {insertUser,getUsers,deleteUser}