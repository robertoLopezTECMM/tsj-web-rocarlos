const express = require("express");
const path = require("path");
const open = require("open");

const app = express();
const port = 3000;

// Ruta absoluta del directorio donde se empaqueta el ejecutable
const rootDir = path.dirname(process.execPath);

// Cuando estás en desarrollo, usa el path local
const distPath = path.join(
  process.pkg ? rootDir : __dirname,
  "dist"
);

app.use(express.static(distPath));

app.get("*", (_, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Servidor local en http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
