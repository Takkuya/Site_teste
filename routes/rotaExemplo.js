//Esse arquivo é um placeholder
const users = require("../database");

const router = require("express").Router();

router.get("/", (req, res) => {
  return res.send(users);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const resUser = users.filter((user) => user.id === req.params.id);

  return res.send(resUser);
});

router.post("/cadastro", (req, res) => {
  const { nome, idade } = req.body;

  const lastUserId = parseInt(users[users.length - 1].id);
  const newId = lastUserId + 1;

  const newUser = {
    id: newId.toString(),
    nome,
    idade,
  };

  users.push(newUser);
  return res.send(newUser);
});

// router.post("/cadastroVarios", (req, res) => {
//   const usuarios = req.body;

//   //achar o ultimo id(ultimoUsuario)

//   // map, do array usuarios
//   //colocar num array novo, mas com os ids

//   const lastUserId = parseInt(users[users.length - 1].id);
//   const newId = lastUserId + 1;

//   const newUsers = [];

//   usuarios.map((usuario, index) =>
//     newUsers.push({
//       id: (newId + index).toString(),
//       nome: usuario.nome,
//       idade: usuario.idade,
//     })
//   );

//   users.push(...newUsers);
//   return res.send(newUsers);
// });

module.exports = router;

//array.map( itemDoArray => fazeroqvcQuer)
