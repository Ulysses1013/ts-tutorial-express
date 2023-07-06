import express from "express";

import todoRoutes from "./routes/todos";
import { json } from "body-parser";

const app = express();

app.use(json());

// todosへのリクエストはtodoRoutesに行く
app.use("/todos", todoRoutes);

// Errorの場合の処理
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(3000);
