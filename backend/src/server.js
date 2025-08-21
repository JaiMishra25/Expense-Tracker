import express from 'express';
import dotenv, { parse } from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoute from './routes/transactionsRoute.js';
import { initDB } from './config/db.js';
import jobs from './config/cron.js';

const app= express();
if(process.env.NODE_ENV === 'production') {
    job.start();
}

app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("api/health",(req,res)=>{
    res.status(200).json({status:"Ok"});
})

app.use('/api/transactions', transactionsRoute);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});