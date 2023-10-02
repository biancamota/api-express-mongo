import { author } from "../models/Author.js";

class AuthorController {
    static async index(request, response) {
        try {
            const authors = await author.find({});
            response.status(200).json(authors);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    static async show(request, response) {
        try {
            const author = await author.findById(request.params.id);
            response.status(200).json(author);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    static async create(request, response) {
        try {
            const newAuthor = await author.create(request.body);
            response.status(201).json("Author created");
        } catch (error) {
            response.status(500).json(error);
        }
    }

    static async update(request, response) {
        try {
            await author.findByIdAndUpdate(request.params.id, request.body);
            response.status(200).json("Author updated");
        } catch (error) {
            response.status(500).json(error);
        }
    }

    static async delete(request, response) {
        try {
            const author = await author.findByIdAndDelete(request.params.id);
            response.status(200).json("Author deleted");
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default AuthorController;