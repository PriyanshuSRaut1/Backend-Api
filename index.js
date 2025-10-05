const express = require('express')
require('dotenv').config()

const app=express()

const githubData={
  "login": "PriyanshuSRaut1",
  "id": 205547894,
  "node_id": "U_kgDODEBpdg",
  "avatar_url": "https://avatars.githubusercontent.com/u/205547894?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/PriyanshuSRaut1",
  "html_url": "https://github.com/PriyanshuSRaut1",
  "followers_url": "https://api.github.com/users/PriyanshuSRaut1/followers",
  "following_url": "https://api.github.com/users/PriyanshuSRaut1/following{/other_user}",
  "gists_url": "https://api.github.com/users/PriyanshuSRaut1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/PriyanshuSRaut1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/PriyanshuSRaut1/subscriptions",
  "organizations_url": "https://api.github.com/users/PriyanshuSRaut1/orgs",
  "repos_url": "https://api.github.com/users/PriyanshuSRaut1/repos",
  "events_url": "https://api.github.com/users/PriyanshuSRaut1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/PriyanshuSRaut1/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Priyanshu Raut",
  "company": null,
  "blog": "priyanshuraut.netlify.app",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Code. Coffee. Curiosity.  \r\nThe rest is just commits.  \r\n",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2025-03-30T19:15:07Z",
  "updated_at": "2025-08-09T03:52:07Z"
}
 
app.get('/',(req, res)=>{
    res.send("hello friends !")
})

app.get('/about',(req, res)=>{
    res.send("You are on About!")
})
app.get('/user',(req,res)=>{
    res.send("<h1>Hello, Priyanshu's API running")
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`Listning on port ${process.env.PORT}`)
})