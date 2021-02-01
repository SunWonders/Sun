import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private fileUploadURL =environment.fileUploadURL;


  constructor(private http: HttpClient) { }

  httpOptions = {

    headers: new HttpHeaders({
      observe: 'response'
    }),
    withCredentials: true
  };

  public fileUpload(formdata: any) {
    return this.http.post<any>(environment.fileUploadURL,formdata,this.httpOptions);
  }

}
