import {
  HttpErrorResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, retry, throwError, timeout } from 'rxjs';
import { Loader } from '../loader/loader';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const loader = inject(Loader);

  // ================== HEADERS ==================
  const token = localStorage.getItem('token');
  const tenantId = localStorage.getItem('tenantId');

  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (tenantId) {
    headers['X-Tenant-Id'] = tenantId;
  }

  const clonedReq = req.clone({ setHeaders: headers });

  // ================== LOADER ==================
  loader.show();

  return next(clonedReq).pipe(
    // ================== TIMEOUT & RETRY ==================
    timeout(30000),   // 30 sec
    retry(1),

    // ================== ERROR HANDLING ==================
    catchError((error: HttpErrorResponse) => {
      let message = 'Something went wrong';

      if (error.status === 0) {
        message = 'Network error';
      } else if (error.status === 400) {
        message = error.error?.message || 'Bad request';
      } else if (error.status === 401) {
        message = 'Session expired';
        localStorage.clear();
        router.navigate(['/login']);
      } else if (error.status === 403) {
        message = 'Access denied';
      } else if (error.status === 404) {
        message = 'API not found';
      } else if (error.status === 500) {
        message = 'Server error';
      }

      console.error('API ERROR 👉', message, error);

      return throwError(() => ({
        status: error.status,
        message,
        raw: error,
      }));
    }),

    // ================== LOADER HIDE ==================
    finalize(() => loader.hide())
  );
};
