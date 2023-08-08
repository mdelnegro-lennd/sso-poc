import express from "express";
import { CustomError } from "../errors";

export const errorMiddleware = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).send({
      errors: error.serializeErrors(),
    });
  }

  res.status(400).send({
    err: error.message,
  });
};
