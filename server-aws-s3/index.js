const express = require("express");
const fileUpload = require("express-fileupload");
const photosRoutes = require("./photos.routes")
const app = express();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './archivos'
}));

app.use(photosRoutes);

app.listen(3000);
console.log("server on port 3000");