import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadService } from '../@service/upload-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';         
import { HttpEvent, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-upload-file',
  imports: [CommonModule,FormsModule,MatProgressBarModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  selectedFile: File | null = null;
  selectedPrefix: string = '';
  uploadInProgress = false;
uploadProgress = 0;
constructor(private dialogRef: MatDialogRef<UploadFileComponent>,private uploadService:UploadService) {}

  close() {
    this.dialogRef.close();
  }

  onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
  }
}

onUpload(event: Event) {
  event.preventDefault();
  if (!this.selectedFile?.name) {
    this.uploadService.Toast.fire('Please select a file to upload.', '', 'warning');
    return;
  }

  this.uploadInProgress = true;
  this.uploadProgress = 0;


  let prefix = '';
  if (this.selectedPrefix == 'profile') {
    prefix = 'profile';
  }else{
    prefix = 'jobDescription';
  }
 // const prefix = this.selectedPrefix || 'profile' ;
  const uploadUrl = `https://resource-ai-assist-be.cfapps.eu10-004.hana.ondemand.com/api/storage/upload?prefix=${encodeURIComponent(prefix)}`;

  this.uploadService.uploadFile(this.selectedFile, uploadUrl)
    .subscribe({
      next: (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          this.uploadProgress = Math.round((event.loaded / event.total) * 100);
        } else if (event.type === HttpEventType.Response) {
          this.uploadInProgress = false;
          this.uploadProgress = 100;
          this.uploadService.Toast.fire('File uploaded successfully.', '', 'success');
        }
      },
      error: err => {
        this.uploadInProgress = false;
        this.uploadProgress = 0;
        this.uploadService.Toast.fire('File upload failed.', '', 'error');
      }
    });
  }
}
