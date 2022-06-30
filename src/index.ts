import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { App } from './app';
import { CompanyRoute } from './routes';

const bootstrap = async () => {
    const conn = await createConnection();
    
    const app = new App(
        express(), 
        [
            new CompanyRoute()
        ],
    );

    const shutdown = async () => {
        await conn.close();
        process.exit();
    };
  
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
}

bootstrap();
