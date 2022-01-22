import express, {json} from 'express'
import cors from 'cors'

const server = express();
server.use(cors())
server.use(json());

const users = [];
const tweets =[];
let userBackup = {
  username:"",
  avatar:""
}

server.get('/users', (req, res) => {
    res.send(users);
  });

server.post('/sign-up', (req, res) => {
    const user = req.body; 
    users.push(user);
    userBackup.username = user.username;
    userBackup.avatar = user.avatar;
    res.send("ok");
  });

server.post('/tweets', (req, res) => {
  const tweet = req.body; 
  tweets.push({...userBackup, ...tweet});
  res.send("ok");
});

server.get('/tweets', (req, res) => {
  if(tweets.length<=10){
    res.send(tweets);
  }else {
    const tweetsReturn = tweets.slice(tweets.length-11, tweets.length);
    res.send(tweetsReturn);
  }

});

server.listen(5000,() => console.log("Init server"))