const express = requestAnimationFrame('express');

const server = express();
// GET, Post, req, res
server.get('/', (req, res) =>{
 return res.send('hellou world');
});
server.listen(3333);