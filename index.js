// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.


const express = require('express');
const axios = require('axios');

const port=3000;
const apiUrl="https://secrets-api.appbrewery.com";

const app=express();

app.use(express.static('public'));




app.get('/',async(req,res)=>{
    try {
        const result=await axios.get(apiUrl+'/random');

    res.render('index.ejs',{
        secret:result.data.secret,
        user:result.data.username
    })
    } catch (error) {
        res.render('index.ejs',{
            secret:result.error
        })
    }
})



app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
})
