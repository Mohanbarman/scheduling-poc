# Project setup

Default port is 3000 you can change it by running following command
`export PORT=5001`

1. `npm i`
2. `npm run start`

# API

```http
POST: http://localhost:3000/schedule
Content-Type: application/json

{
    "time": "2022-03-25T13:47:57.892Z",
    "text": "Hello world"
}

```

# Frameworks

## Express

It is the most popular framework for building http servers in nodejs

## node-schedule

I used this library for scheduling jobs, I find it best for the problem provided because of it's support to schedule one time job and ability to run on windows machines as well as on linux

# Problems

I didn't faced much problems implementing this since it was a simple problem.

# Approach

I am running storing all the jobs in memory. on the /schedule route I call the node-schedule api to schedule the task
