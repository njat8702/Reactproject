const mysql = require("mysql2");
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1710",
    database: "testdb"
});
db.connect(err => {
    if(err){
        console.log(err);
    }
    console.log("MySql connected.")
});

module.exports=db
