import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public closeNav: any;

  constructor(public toastr: ToastrService) { }

  ngOnInit(): void {

  }

  out(){
    this.toastr.success('Log Out Successfully');
  }


}
