import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  formdata = new FormData();
  url = environment.fileUploadURL;
  filelength:any;
  shortURL:any;
  uploadForm: FormGroup;
  private progress = 0;
  @ViewChild('bar') bar: ElementRef;
  ProgressBar:boolean;
  urlVisibility:boolean;

  get progressPercentage() {
    return Math.floor(this.progress * 50);
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  constructor( private http: HttpClient,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) { 
  }
  fileData: File = null;

  ngOnInit(): void {
    this.ProgressBar=false;
    this.urlVisibility=false;
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });

  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  UploadFile(event) {
    debugger;
    this.ProgressBar=false;
    this.urlVisibility=false;
    this.filelength=event.target.files.length;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  
   onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    if(this.filelength > 0){
      this.ProgressBar=true;
      this.progress=0;
      setInterval(() => {
        this.progress += 0.001;
        if (this.progress >= 1) {
          this.progress = 2;
        }
       
      }, 0);
    this.http.post(this.url,
      formData,
      { observe: 'response' ,
      reportProgress: true,}
    ) .subscribe((res) => {
      console.log(res.body);

      if (res.body['status'] === 200){
        this.shortURL=res.body['shortUrl'];    
        console.log(this.shortURL);
        this.urlVisibility=true;
      }
      
    }, err => {
      this.openSnackBar("Please Upload File Again",'OK')
    });

    // .pipe(
    //   map((event: any) => {
    //     if (event.type == HttpEventType.UploadProgress) {
    //       this.progress = Math.round((100 / event.total) * event.loaded);
    //     } else if (event.type == HttpEventType.Response) {
    //       this.progress = null;
    //     }
    //   }),
    //   catchError((err: any) => {
    //     this.progress = null;
    //     alert(err.message);
    //     return throwError(err.message);
    //   })
    // ).toPromise();
   
  }else{
    this.openSnackBar("Please Choose File ",'OK')
  }

  }


openSnackBar(message: string, action: string) {
  if (message !== '') {
    this.snackBar.open(message, action, {
      duration: 5000,
      panelClass: 'success-dialog'
    });
  }
}

}
