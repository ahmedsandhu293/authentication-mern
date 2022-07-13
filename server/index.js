const express = require('express');
const app = express();

app.get('/hello',(req,res)=>{
    res.send('hello world')
});
app.listen(1337,()=>{
    console.log('server started at 1337 port');
})
//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