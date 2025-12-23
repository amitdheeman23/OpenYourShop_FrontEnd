import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandle {

  handleErros(error: HttpErrorResponse) {
    let errorMesssage = 'Something went wrong.';
    if (error.error instanceof ErrorEvent) {
      errorMesssage = error.error.message;

    } else {
      switch (error.status) {
        case 400:
          errorMesssage = error.error?.message || 'Bad request';
          break;
        case 401:
          errorMesssage = 'Unauthorized. Please login again';
          break;
        case 403:
        case 430:
          errorMesssage = error.error?.message || 'Access denied';
          break;
        case 404:
          errorMesssage = 'Not found.';
          break;
        case 500:
          errorMesssage = 'Internal server error';
          break;
        default:
          errorMesssage = error.error?.message || 'Unexpected error occurred.'

      }
    }

    return throwError(()=>({
      status:error.status,
      message:errorMesssage,
      originalError:error,
    }))

  }
}
