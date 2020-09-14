const express = require('express');

const server = express();
// GET, Post, req, res
server.get('/', (req, res) =>{
    
 return res.json({massage : `hellou ${req.query.name}`});
});
server.listen(3333);