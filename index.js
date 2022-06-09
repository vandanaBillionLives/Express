import fetch from 'node-fetch';
import express from 'express'


const app = express();

app.listen("8000", ()=>{
  console.log("PORT is running on 8000");
})

app.get("/api/welcome", (req, res)=>{
  fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: req.query.email,
                password: req.query.password
            })
        })
            .then((res) => res.json())
            .then((resJson) => {
              res.json(resJson);
                
            }) 
})
