import app from './app';
import connect from './config/db';
import { env } from './config/env';


connect().then(()=>{
    console.info("Connected to database");
    app.listen(env.PORT, ()=>{
        console.log(`Server listening on port ${env.PORT}`);
    })
}).catch((error)=>{
    console.error("Error connecting to database: ", error);
})