import { CustomError } from '../errors';

export class NotFoundError extends CustomError {
    statusCode: number = 404;

    serializeErrors(): { message: string; }[] {
        return [
            {
                message: 'Not Found'
            },
        ]
    }
}
