import express from 'express';
const app = express();
import bodyParser from 'body-parser';
const port = 3000;

//*** Port listning  */
app.listen(port, () => {
    console.log(`server is listning on port ${port}`)
})