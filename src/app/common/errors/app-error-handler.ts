import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        console.log('There is Unexpected Error');
        console.log(err);
    }
}
