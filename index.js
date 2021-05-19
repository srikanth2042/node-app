const express = require('express');
const app = express();

// default route for /
app.get('/', function (req, res) {
  res.send('Hello World');
});

// api route to get users from database
// hit http://localhost:3000/getusers to see its response
app.get('/getusers', function (req, res) {
    // here a call will go to Database to fetch all users
    // TO-DO: hit the database-client here
    // const usersLit = userService.getAllUsers();

    // imagine you got list users array from database
    const usersLit = [
        {
            name: 'Romeo',
            age: 25
        },
        {
            name: 'Scorpio',
            age: 27
        }
    ];
    // send back the response with users list
    res.json(usersLit);
});

// post api route call to add user
app.post('/api/adduser', function (req, res) {
    // here a call will go to Database to save the user in db
    // TO-DO: hit the database-client here
    // userService.addUser(req.body); // here req.body will contain object  { name: 'Dummy', age: 25 }

    // imagine you added following user
    const addedUser = {
        name: 'Dummy',
        age: 25
    };
    // send back the response with users list
    res.json(addedUser);
});

// my app will be listening on 3000 port
const port = 3000;
app.listen(port);
console.log(`Node app started on port: ${port}`);
