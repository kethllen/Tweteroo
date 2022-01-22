import express, {json} from 'express'
import cors from 'cors'

const server = express();
server.use(cors())
server.use(json());

const users = [];
const tweets =[];

server.get('/users', (req, res) => {
    res.send(users);
  });

server.post('/sign-up', (req, res) => {
    const user = req.body; 
    users.push(user);
    res.send("ok");
  });

server.post('/tweets', (req, res) => {
  const tweet = req.body; 
  tweets.push(tweet);
  res.send("ok");
});

server.listen(5000,() => console.log("Init server"))