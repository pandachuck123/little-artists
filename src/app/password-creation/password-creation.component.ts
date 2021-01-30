import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-password-creation',
  templateUrl: './password-creation.component.html',
  styleUrls: ['./password-creation.component.scss']
})
export class PasswordCreationComponent implements OnInit {
  public password: FormGroup;
  constructor(public fb: FormBuilder, public toast: ToastrService) {
    this.password = this.fb.group({
      name : ['', Validators.required],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('[6789][0-9]{9}')])],
      emailId: ['', Validators.compose([Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\\']+(\\.[^<>()[\\]\\\\.,;:\\s@\\\']+)*)|(\\\'.+\\\'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')])],
      password : ['', Validators.required],
      confirmpasswd : ['', Validators.required],
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

  sign(value){
    console.log(value, 'value...');
    if (this.password.valid){
      if ((this.password.controls['password'].value) == (this.password.controls['confirmpasswd'].value)){
        this.toast.success('Teacher Sign Up Successful!.');
      }else{
        this.toast.error('Password and Confirmation Password is not Matching');

      }
    }
  }

}
