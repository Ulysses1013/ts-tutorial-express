import { Router } from "express";
import { createTodo, deleteTodo, updateTodo } from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", createTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
