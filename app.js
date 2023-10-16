const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "data.txt");
const server = http.createServer((req, res) => {
   if (req.url === '/') {
    res.write("Hello World");
    res.end();
} else if (req.url === '/form') {
    res.setHeader("content-type", "text/html");
    res.write("<form action='/submit' method='POST'><input name='data' /> <input name='data2' /><button>Submit</button> </form>");
    res.end();
} else if (req.url === '/submit') {
    let data = "";
    req.on("data", chunk => data+=chunk);
    req.on("end", () =>{
        fs.readFile(filePath, "utf-8", (_, fileData) => {
            const newData = fileData + "\n" + data;
            fs.writeFile(filePath, newData, () => {
            res.write("Data Received");
            res.end();
        });
        })
        
    //  console.log(data)
        
    });

}
 else {
    res.write("404 - Page Not Found");
    res.end();

}
});
server.listen(3000)