"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wishlistSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    wishlist: { type: [Object], default: [] },
    currentBooksReading: { type: [Object], default: [] },
}, {
    timestamps: true,
});
const wishList = (0, mongoose_1.model)('wishList', wishlistSchema);
exports.default = wishList;
