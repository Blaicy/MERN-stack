import express from "express"
import { createNotes, deleteNotes, getNoteById, getNotes, updateNotes } from "../controllers/notesController.js"

const router = express.Router()

router.get('/:id',getNoteById)
router.get('/', getNotes)
router.post('/', createNotes)
router.put('/:id', updateNotes)
router.delete('/:id', deleteNotes)

export default router