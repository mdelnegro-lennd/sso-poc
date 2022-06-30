import { CustomError } from './custom.error';

export class NotAuthorizedError extends CustomError {
    statusCode: number = 401;

    constructor(
        private readonly subject: string,
        private readonly action: string,
    ) {
        super();
    }

    serializeErrors(): { message: string; }[] {
        return [{
            message: 'User is not authorized'
        }]
    }
}