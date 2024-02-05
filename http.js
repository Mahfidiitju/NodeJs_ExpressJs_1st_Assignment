const http=require('http');
const fs=require('fs');
const port=5500;

var server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("This is home page");
        res.end();
    }
    else if(req.url=='/about')
    {
        
        res.writeHead(200,{"content-type":"text/html"});
        res.write("This is About page");
        res.end();
    }
    else if(req.url=='/contact')
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("This is Contact page");
        res.end();
    }
    else if(req.url=='/file-write')
    {
        fs.writeFile('demo.txt','Hello world',(err)=>{
            if(!err)
            {
                res.writeHead(200,{"content-type":"text/html"});
                res.write("Successfuly write file");
                res.end();
            }
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write("Failed to write");
                res.end();
            }
        })
    }
})
server.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});