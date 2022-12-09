var mysql=require('mysql')
const data = require("../jsondata.json")



var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ashwini@3105",
    database: "second_project"
});

// conn.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     conn.query("CREATE DATABASE Second_Project", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
    
//   });
// });

// var mod = "CREATE TABLE meraki_data (id int primary key auto_increment, name VARCHAR(1000), logo VARCHAR(1000) , notes VARCHAR(1000),days_to_complete VARCHAR(1000),short_description VARCHAR(1000),type VARCHAR(1000),course_type VARCHAR(1000),lang_available VARCHAR(1000))";
// conn.query(mod, function (err, result) {
//     if (result){
//     console.log("Table created");
//     }else{
//       console.log(err)
//     }
//   });


list1=[]
for (let i=0; i<data.length; i++){
    list1.push([data[i].id, data[i].name, data[i].logo, data[i].notes, data[i].days_to_complete, data[i].short_description, data[i].type, data[i].course_type, (data[i].lang_available).toString()])
}
// console.log(list1)
// var sql = `INSERT INTO meraki_data VALUES?`
// conn.query(sql, [list1], (err, result) => {
//     if (err) throw err;
//     console.log(' insete data ');
// })

module.exports=conn
