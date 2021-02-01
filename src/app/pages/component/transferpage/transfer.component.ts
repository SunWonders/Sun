import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransferService} from './transfer.service';
@Component({
  selector: "app-transfer-page",
  templateUrl: "transfer.component.html"
})
export class TransferPageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  target:any;
  shortURL:any;
  uploadForm: FormGroup;
  formdata = new FormData();
  filelength:any;
  emailId:any;

  constructor(private formBuilder: FormBuilder,
    private TransferService: TransferService,) {}

  
  /**
 * @author madhusudhan.l
 * @description file upload 
 * @param filedata,emailId
 * 
 * 
 */
  UploadFile(event){
    this.filelength=event.target.files.length;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }

  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    formData.append('emailId', this.emailId);
    if(this.filelength > 0){
      this.TransferService.fileUpload(formData).subscribe((res) => {
        console.log(res);
        if (res.status === 200){
          this.shortURL=res.shortUrl;    
          alert("Short URL: "+this.shortURL);
        }      }, (err) => {
        alert("error")
      });
    }
  }
  
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });

    // noUiSlider.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider2 = document.getElementById("sliderDouble");

    // noUiSlider.create(slider2, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
