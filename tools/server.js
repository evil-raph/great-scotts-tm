import express from 'express';

const app = express();
const port = process.env.PORT || 4205;

app.listen(port, function(req, res){
    console.info(`Started GreatScottsTM at port ${port}`);
});