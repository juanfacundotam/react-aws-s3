const { Router } = require("express");
const { uploadFile, readFile } = require("./s3");
const router = Router();

router.get("/", (req, res) => res.send("Welcome to server"));

router.post("/upload", async (req, res) => {
  // console.log(req.files["photo"].tempFilePath)
  const result = await uploadFile(req.files["photo"]);

  res.send("File Uploaded");

  console.log(result);
});

router.get("/archivo/:fileName", async (req, res) => {
    try {
        const result = await readFile(req.params.fileName);
        res.send("Tu Archivo fue descargado");
    } catch (error) {
        // Maneja el error aquí, ya que readFile ahora lanza errores si ocurren
        console.log("Tu Archivo no fue descargado");
    }
});

module.exports = router;
