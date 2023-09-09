//require the required packages from node_modules folder
const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

//setup  a connection of index.js with database delta_app through mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'mysql123'
});

//creating a function to use faker to get random data
let getRandomUser=()=>  {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//SQL Command required
//Inserting new data 
let q="INSERT INTO user ( id, username, email, password) VALUES ?";

//creating an array of 100 fake  data
let data=[];
for(let i=1;i<=100;i++){
  data.push(getRandomUser());
}

//manual way to insert data
// let users=[
//   ["123b", "123_newuserb", "abcb@gmail.com", "abcb"],
//   ["123c", "123_newuserc", "abcc@gmail.com", "abcc"]
// ];


//setting up connection to send SQL command and passing q and [data] as an argument
try{
    connection.query(q, [data], (err,res)=>{
        if (err) throw err;
        console.log(res);
        console.log(res.length);
        console.log(res[0]);
        console.log(res[1]);
    });
} catch(err){
    console.log(err);
}

//close connection
connection.end();