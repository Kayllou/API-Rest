import express from "express"
import LivroController from "./src/controllers/livroController.js";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Peter Pan"
    },
    {
        id: 2,
        titulo: "Robin Hood"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

    app.get("/livros/:id", (req, res) => {
        const index = buscaLivro(req.params.id);
        res.status(200).json(livros[index]);
    });

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com suceesso")
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id",  (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro deletado com suceesso");
});

    export default app;