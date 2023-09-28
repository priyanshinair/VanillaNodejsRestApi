//create a http server
const http = require("http");
const getReq = require("./methods/get-request")
const postReq = require("./methods/post-request")
const putReq = require("./methods/put-request")
const deleteReq = require("./methods/delete-request")

let movies = require("./data/movies.json")
//require("dotenv").config();

const PORT = process.env.PORT || 6001;

const server = http.createServer((req, res) => {

    switch(req.method){
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        default:
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/jon")
            res.write(JSON.stringify({title:"not found", message:"route not found"}))
    }
});

server.listen(PORT, () => {
    console.log(`server started on port : ${PORT}` );
})
