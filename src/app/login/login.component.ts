import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public adminLogin: FormGroup;
  public teacherLogin: FormGroup;
  public tabValue: any;
  public hide: boolean;

  constructor(public fb: FormBuilder, public toastr: ToastrService, public router: Router) {
    this.hide = true;

    this.adminLogin = this.fb.group({
      'emailId' : ['', Validators.compose([Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")])],
      'password' : [''],

    });
    this.teacherLogin = this.fb.group({
      'emailId' : ['', Validators.compose([Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")])],
      'password' : [''],

    });
  }
  ngOnInit(): void {
    // this.changeTab();
  }
  tab(value){
    console.log(value,'event....');
    this.tabValue = value;
    if (this.tabValue == 'admin'){
      this.adminLogin.controls['emailId'].setValidators([Validators.required]);
      this.adminLogin.controls['password'].setValidators([Validators.required]);

      this.teacherLogin.controls['emailId'].patchValue('');
      this.teacherLogin.controls['password'].patchValue('');
      this.teacherLogin.controls['emailId'].setValidators([null]);
      this.teacherLogin.controls['password'].setValidators([null]);

    }else if (this.tabValue == 'teacher'){
      this.adminLogin.controls['emailId'].patchValue('');
      this.adminLogin.controls['password'].patchValue('');
      this.adminLogin.controls['emailId'].setValidators([null]);
      this.adminLogin.controls['password'].setValidators([null]);

      this.teacherLogin.controls['emailId'].setValidators([Validators.required]);
      this.teacherLogin.controls['password'].setValidators([Validators.required]);

    }
    this.adminLogin.controls['emailId'].updateValueAndValidity();
    this.adminLogin.controls['password'].updateValueAndValidity();

    this.teacherLogin.controls['emailId'].updateValueAndValidity();
    this.teacherLogin.controls['password'].updateValueAndValidity();

  }
  // changeTab(){
  //
  //
  // }
  submit(value,type){
    console.log(value,'value..')
    if (type=='Admin'){
      if (value.emailId == 'abc@gmail.com' && value.password == '1234567'){
        this.toastr.success('Admin Login Successful!.');
        this.router.navigate(['/home']);
      }else{
        this.toastr.error('Invalid EmailId or Password');

      }
    }else if (type=='Teacher'){
      if (value.emailId == 'abc@gmail.com' && value.password == '1234567'){
        this.toastr.success('Teacher Login Successful!.');
        this.router.navigate(['/home']);
      }else{
        this.toastr.error('Invalid EmailId or Password');

      }
    }
  }
}
