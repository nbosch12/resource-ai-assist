import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({ providedIn: 'root' })
export class UploadService {

  constructor(private http: HttpClient) {}

  /**
   * Uploads any file to the given API URL.
   * @param file The file to upload.
   * @param apiUrl The endpoint to upload to.
   * @returns Observable<any>
   */
  uploadFile(file: File, url: string) {
  const formData = new FormData();
  formData.append('file', file);
  return this.http.post(url, formData, {
    reportProgress: true,
    observe: 'events'
  });
}

     Toast = Swal.mixin({
        showClass: {
          popup: `
            animate__animated
            animate__fadeInLeft
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutLeft
            animate__faster
          `
        },
       toast: true,
       position: 'top-end',
       showConfirmButton: false,
       timer: 4000,
       timerProgressBar: true,
       
       didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        
       }
     })
}