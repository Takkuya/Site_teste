const router = require("express").Router();
const Album = require("../models/Album");

router.get("/:nome", (req, res) => {
  const nome = req.params.nome;

  //   Album.findById(id, (err, doc) => {
  //     if (err) throw err;
  //     return res.json(doc);
  //   });

  Album.findOne({ nome }, (err, doc) => {
    if (err) throw err;
    return res.json(doc);
  });
});

router.post("/cadastro", (req, res) => {
  const { nome, data, banda, musicas } = req.body;

  console.log(req)
  if (!nome || !data || !banda || !musicas) {
    return res.status(400).send("Preencha todos os campos");
  }

  const newAlbum = new Album({
    nome,
    data,
    banda,
    musicas,
  });

  newAlbum.save().then((album) => {
    return res.json(album);
  });

  //   const newAlbum = {
  //     nome: NomeAlbum,
  //   };

  //   return res.send(newAlbum);
});

router.post("/cadastroVarios", (req, res) => {
  const { albums } = req.body;
  const resultado = [];
  albums.map(({ nome, data, banda, musicas }) => {
    if (!nome || !data || !banda || !musicas) {
      return res.status(400).send("Preencha todos os campos");
    }

    const newAlbum = new Album({
      nome,
      data,
      banda,
      musicas,
    });

    newAlbum.save().then((album) => {
      resultado.push(album);
    });
  });

  return res.json(resultado);
});
//Cadastrar mais dois albums, pelo postman
//Escrever uma rota para retornar todos os albums da base de dados(metodo find)

module.exports = router;
