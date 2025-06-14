const Filme = require('../models/filmeModel');

exports.listarFilmes = async (req, res) => {
  try {
    const filmes = await Filme.findAll();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar filmes', error });
  }
};

exports.buscarFilmePorId = async (req, res) => {
  try {
    const filme = await Filme.findByPk(req.params.id);
    if (filme) {
      res.status(200).json(filme);
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar filme', error });
  }
};

exports.filtrarFilmes = async (req, res) => {
  try {
    const { nome } = req.query;
    const filmes = await Filme.findAll({
      where: {
        nome: {
          [Op.like]: `%${nome}%`,
        },
      },
    });
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao filtrar filmes', error });
  }
};
