(async () => {
  const open = (await import('open')).default;

  const app = express();
  const port = 8080;

  const distPath = path.join(__dirname, "dist");

  app.use(express.static(distPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });

  app.listen(port, () => {
    console.log(`Servidor local corriendo en http://localhost:${port}`);
    open(`http://localhost:${port}`);
  });
})();
