import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-upload-student',
  templateUrl: './upload-student.component.html',
  styleUrls: ['./upload-student.component.scss']
})
export class UploadStudentComponent implements OnInit {

  public form: FormGroup;
  public CityValid: any
  public image: any
// public uploadPath:any
  public config: any
  public imageSrc: any
  public updateValue: any

  constructor( public fb: FormBuilder, public toast: ToastrService ) {
    this.image = [];
    this.updateValue = false;

    this.form = this.fb.group({
      firstname : ['', Validators.required],
      // regNo : ['', Validators.required],
      // mobile: ['', Validators.compose([Validators.required, Validators.pattern('[6789][0-9]{9}')])],
      // emailId: ['', Validators.compose([Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\\']+(\\.[^<>()[\\]\\\\.,;:\\s@\\\']+)*)|(\\\'.+\\\'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')])],
      file : ['', Validators.required],
      fileSource : [''],
    });

  }

  ngOnInit(): void {
  }
  nameValidate(event) {
    if (event.code == 'Space') {
      if (event.target.value.length == 0) {
        event.preventDefault();
      }
    } else {
      if (event.charCode !== 0) {
        const pattern = /[a-zA-Z ]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }
    }
  }

  numberValidate(event) {
    if (event.charCode !== 0) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(this.imageSrc,'this.imageSrc....');

        this.form.patchValue({fileSource: reader.result});


      };

    }
  }
  onNoClick(){
    this.imageSrc = '';
    this.form.controls[ 'file' ].patchValue('');
    this.form.controls[ 'fileSource' ].patchValue('');
  }

  submit(value){
    console.log(value, 'value...')
    this.image.push(this.form.value);
    console.log(this.image, 'this.image');
    // for (let i = 0; i < this.image.length; i++ ){
    //   // this.create(i);
    // }
  }
  // create(i) {
  //   this.updateValue = true;
  //   const data = {
  //     // 'userId': 1,
  //     // "id": 2,
  //     // "email": "janet.weaver@reqres.in",
  //     // "first_name": "Janet",
  //     // "last_name": "Weaver",
  //     // "avatar": "https://reqres.in/img/faces/2-image.jpg"
  //     'firstname': this.form.controls['firstname'].value,
  //     'lastname': this.form.controls['lastname'].value,
  //     'emailId': this.form.controls['emailId'].value,
  //     'profile': this.image[i].fileSource,
  //   };
  //   console.log(data,'data...')
  //   this.service.valuesss(data).subscribe(
  //     (successData) => {
  //       this.downloadSuccess(successData, i);
  //     },
  //     (error) => {
  //       this.downloadFailure(error);
  //     }
  //   );
  // }
  //
  // public downloadSuccess(successData, i) {
  //   console.log(i, 'type');
  //   if (successData.IsSuccess == true) {
  //     console.log(successData,'successData');
  //     this.toast.error('Success');
  //
  //   } else {
  //     this.toast.error('failed');
  //   }
  //
  // }
  //
  // public downloadFailure(error) {
  // }
  // edit(i){
  //   alert(i);
  //   this.updateValue = true;
  //   // this.form.controls['firstname'].patchValue(this.proposer.communication_address.address1);
  //
  // }
  // delete(i){
  //   alert(i);
  //   // this.image.removeAt(i);
  //   this.image.splice(i, 1 );
  //   console.log(this.image, 'index..');
  // }





}
