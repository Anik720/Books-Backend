"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publication_date: { type: Date, require: true },
    reviews: { type: [String] },
    images: { type: String, required: true },
    readingStatus: { type: [Object], default: [] },
    // seller: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
}, {
    timestamps: true,
});
const Book = (0, mongoose_1.model)('Book', bookSchema);
exports.default = Book;
