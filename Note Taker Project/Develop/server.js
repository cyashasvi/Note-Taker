const express = require('express')
const api = require('./Routes/api-routes');
const app = express();
const PORT = 3001;
const htmlRoute = require("./Routes/html-routes")

app.use('/api', api);
app.use(express.static("public"));
app.use("/", htmlRoute);
app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}` ));


