import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, 'Ingrese mas de tres letras']
    }
}, {
    timestamps: true
  });

export const Author = model('Author', AuthorSchema)