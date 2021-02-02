import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public messages: FormGroup;

  constructor(public fb: FormBuilder, public toastr: ToastrService,) {
    this.messages = this.fb.group({
      text : ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submit(value){
    // if (value.valid){
      console.log(value,'value')
    this.toastr.success('Message Submitted Successful!.');
    // }
  }
}
