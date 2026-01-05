import app from './app.js';

app.listen(process.env.PORT, ()=>{
    console.log(`server Running on Port ${process.env.PORT}`);
});