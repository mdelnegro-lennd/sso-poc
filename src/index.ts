import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { App } from "./app";
import { AuthRoute, HomeRoute } from "./routes";

const bootstrap = async () => {
  new App(express(), [new AuthRoute(), new HomeRoute()]);

  const shutdown = async () => {
    process.exit();
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
};

bootstrap();
