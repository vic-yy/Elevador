const express = require('express');




const app = express();
const port = 3000;

app.use('./routes/elevatorRoutes', elevatorRoutes);

app.listen(port, () => {
    console.log('teste ${port}');
});