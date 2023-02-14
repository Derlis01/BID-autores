import { Author } from '../models/model.js'


export const postAuthor = async (req, res) => {
    try {
        const newAuthor = await Author(req.body)
        const savedAuthor = await newAuthor.save()
        res.status(201).json(savedAuthor)
    }
    catch (err) {
        res.status(400).json({error: err})
    }
}   

export const getAuthor = async (req, res) => {
    try{
        const allAuthor = await Author.find()
        res.json(allAuthor)
    }
    catch (err) {
        res.status(400).json({error: err})
    }
}

export const getById = async (req, res) => {
    try{
        const newAuthor = await Author.findById(req.params.id)
        res.status(200).json(newAuthor)
        if(!newAuthor) {
            res.status(404).json({error: 'Author no encontrado'})
        }
    }
    catch (err) {
        console.error(err)
    }
}

export const editById = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      if (name && name.length < 3) {
        return res.status(400).json({ error: 'El nombre debe tener al menos 3 letras' });
      }
      const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedAuthor) {
        return res.status(404).json({ error: 'Author no encontrado' });
      }
      res.status(200).json(updatedAuthor);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocurrió un error al actualizar el autor' });
    }
  }

export const deleteAuthor = async (req, res) => {

    try{
        const deletedAuthor = await Author.findByIdAndDelete( req.params.id )
        res.status(200).json(deletedAuthor)

        if(!deletedAuthor) {
            res.status(404).json({error: 'Author no encontrado'})
            }
            
    }
    catch (err) {
        console.err(err)
    }
}