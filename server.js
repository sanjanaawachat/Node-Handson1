//How to create server in nodejs by sending response in HTML and JSON  format
const http = require("http");
const store = [
    {
        roll_no: 1,
        first_name: "sanjana",
        last_name: "Awachat",
        role: "Front end developer"
    },
    {
        roll_no: 2,
        first_name: "saurabh",
        last_name: "shrivastav",
        role: "Full Stack Developer"
    },
    {
        roll_no: 3,
        first_name: "sahil",
        last_name: "Gupta",
        role: "Front end developer"
    },
    {
        roll_no: 4,
        first_name: "ritika",
        last_name: "Joshi",
        role: "Front end developer"
    },
    {
        roll_no: 5,
        first_name: "sonal",
        last_name: "nagdevte",
        role: "Mern developer"
    },
]
const json_format = JSON.stringify(store);//By sending response in Json Format
const server = http.createServer((req, res) => {
    // res.write(`<h1>First Handson Assignments-Node1</h1>`);//By sending response in Html format
    res.write(`<h1>First Handson Assignments-Node1</h1>`);
    res.write(json_format);

    res.end();
     
});
server.listen(4000, "127.0.0.1", () => {
    console.log("server is running in port 4000");
}); 