import { author } from '../models/Author.js';
import book from '../models/Book.js';

class BookController {
    static async index(request, response) {
        try {
            const books = await book.find({});
            response.status(200).json(books);            
        } catch (error) {
            response.status(500).json(error);
        }
    }

    static async show(request, response) {
        try {
            const book = await book.findById(request.params.id);
            response.status(200).json(book);            
        } catch (error) {
            response.status(500).json(error);
        }
    }

static async create(request, response) {
    const requestData = request.body;
    try {
        const authorData = await author.findById(requestData.author);
        const newBook = { ...requestData, author: { ...authorData._doc } };

        await book.create(newBook);
        response.status(201).json("Book created");
    } catch (error) {
        response.status(500).json(error);
    }
}

    static async update(request, response) {
        try {
            await book.findByIdAndupdate(request.params.id, request.body);
            response.status(200).json("Book updated");            
        } catch (error) {
            response.status(500).json(error);
        }
    }

    static async delete(request, response) {
        try {
            const book = await book.findByIdAndDelete(request.params.id);
            response.status(200).json("Book deleted");            
        } catch (error) {
            response.status(500).json(error);
        }
    }

    static async findByCategory(request, response) {
        try {
            const books = await book.find({ category: request.params.category });
            response.status(200).json(books);            
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default BookController;

