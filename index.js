const express = require('express')
const app = express();
const routes = require('../node/routes/index')
let cors = require('cors');

const dbConnector = require('./models');

dbConnector.sequelize.sync().then(() => {
  app.listen("8000", ()=>{
    console.log("PORT is running on 8000");
  })
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use("/api", routes);



// const express = require('express')
// const app = express();


// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

// var dbConnector = require("./dbconnector");

// dbConnector.connectToDB(() => {
//   app.listen("8002", () => {
//     console.log("PORT is running on 8000");
//   })
// })



// var secret = "841235432344ADRA";
// let crypto = require('crypto-js');

// var decrypter = require("./decrypt");

// app.get("/api/welcome", (req, res) => {
//   // res.send("Billion Lives Backend Project")
//   if (req.query.username == "Saras" && req.query.password == "qwerty") {
//     var json = { "name": "Saras", "mobile": "99999999" };
//     // res.send("Login successful");
//     res.json({ "status": true, "message": "Login Succesful", result: json });
//   } else {
//     res.send("Invalid Credentials");
//   }
// })


// var users = [];

// var id = 0;

// app.post("/api/user", (req, res) => {

//   var name = req.body.name;
//   var email = req.body.email;
//   var mob = req.body.mob_no;
//   var password = req.body.password;

//   // if (users.length > 0) {
//   //   for (var user of users) {
//   //     if (user.email == email) {
//   //       res.json({ status: false, message: "Email already exists" });
//   //       return;
//   //     }
//   //   }
//   // }

//   // var newUser = {
//   //   "id": id,
//   //   "name": name,
//   //   "email": email,
//   //   "mob": mob,
//   //   "password": password,
//   // }
//   // id++
//   // users.push(newUser);

//   var query = "INSERT INTO SUNIDHI_CORE_V2_0.TbUser(Name, EmailId, Password) VALUES ('" + name + "','" + email + "','" + password + "')";

//   dbConnector.perfromDBOperation(query, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.json({ status: false, message: "User not added successfully" })
//     } else {
//       console.log(result);
//       res.json({ status: true, message: "User added successfully" })
//     }
//   })


// })

// app.post("/api/getuserDetails", (req, res) => {

//   var name = req.query.name;
//   var query = "SELECT * FROM TbUser where Name='" + name + "'";
//   dbConnector.perfromDBOperation(query, (err, result) => {
//     if (err) {

//       res.json({ status: false, message: "There is no any such user" });
//     } else {
//       res.json({ status: true, message: "User details", result: result });
//     }
//   })
// })


// app.put("/api/updateuser", (req, res) => {
//   console.log(req.query);
//   var id = parseInt(req.query.id)
//   var email = req.query.email
//   var name = req.query.name
  
//   var query = "Update TbUser set Name='" + name + "',EmailId='" + email + "' where ID=" + id + ";";
//   console.log(query);
//   dbConnector.perfromDBOperation(query, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.json({ status: false, message: "invalid user id" });
//     } else {
//       res.json({ status: true, message: "User details updated successfully", result: result });
//     }
//   })

  

// })


// app.post("/login", decrypter.decryptBody, (req, res) => {
//   console.log("body");
//   console.log("body", req.body);
//   res.json({ status: true, message: "decryptor API called" });
// })