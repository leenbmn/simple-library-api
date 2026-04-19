const { Author, Book } = require('../models');

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({
      include: [{ model: Book, as: 'books' }]
    });
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      include: [{ model: Book, as: 'books' }]
    });

    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }

    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }

    await author.update(req.body);
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }

    await author.destroy();
    res.status(200).json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};