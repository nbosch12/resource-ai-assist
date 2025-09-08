import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadService } from '../@service/upload-service';
import { CommonModule } from '@angular/common';
                          
@Component({
  selector: 'app-upload-file',
  imports: [CommonModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  selectedFile: File | null = null;
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
if(this.selectedFile?.name ==null || this.selectedFile?.name == undefined || this.selectedFile?.name == '') {
  this.uploadService.Toast.fire('Please select a file to upload.', '', 'warning');
  return
}


console.log('Selected file:', this.selectedFile);
  if (this.selectedFile) {
    this.uploadService.uploadFile(
  this.selectedFile,
  'https://resource-ai-assist-be.cfapps.eu10-004.hana.ondemand.com/api/storage/upload?prefix=profile'
)
.subscribe({
  next: res => this.uploadService.Toast.fire('File uploaded successfully.', '', 'success'),
  error: err => this.uploadService.Toast.fire('File upload failed.', '', 'error')
});
  }
}

}
