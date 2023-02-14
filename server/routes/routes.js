import { Router } from "express";
const route = Router()
import { deleteAuthor, editById, getAuthor, postAuthor, getById } from "../controllers/controller.js";

route.post('/post', postAuthor)
route.get('/get', getAuthor)
route.get('/get/:id', getById)
route.put('/edit/:id', editById)
route.delete('/delete/:id', deleteAuthor)

export default route