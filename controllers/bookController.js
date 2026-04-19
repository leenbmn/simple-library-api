const { Book, Author } = require('../models');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [{ model: Author, as: 'author' }]
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: [{ model: Author, as: 'author' }]
    });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const author = await Author.findByPk(req.body.authorId);

    if (!author) {
      return res.status(404).json({ message: 'Author not found for this book' });
    }

    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.update(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.destroy();
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};