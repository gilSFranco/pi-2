import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;
app.listen(port, (erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Servidor iniciado com sucesso.");
  }
});
