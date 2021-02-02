import {Component, Inject, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public closeNav: any;

  constructor(public toastr: ToastrService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  out(){
    this.toastr.success('Log Out Successfully');
  }

  popupBox(){
    let dialogRef = this.dialog.open(PopUp, {
      width: '600px',
      height: '300px'
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log(result,'result....');
    });
  }


}


@Component({
  selector: ' popup ',
  template: `
        <div class="col-md-12 text-right" style="margin-left: 20px;
    margin-bottom: 10px;
    margin-top: -8px;
" >
            <i class="material-icons" (click)="close()" style="cursor: pointer">
                cancel
            </i>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center w-100">
                  <mat-form-field class="w-100">
                    <mat-label>Leave A Message</mat-label>
                    <textarea matInput [(ngModel)]="msgPopup" autocomplete="off" required></textarea>
                  </mat-form-field>
                </div>
            </div>
        </div>
        <div mat-dialog-actions style="justify-content: center;margin-top: 75px">
          <button mat-raised-button style="background-color: darkblue; color: white;" (click)="clearText()">Clear</button>
          <button mat-raised-button style="background-color: darkblue; color: white;" (click)="submit(msgPopup)">Submit</button>

        </div>
    `
})
export class PopUp {
  msgPopup: any;
  constructor(
    public dialogRef: MatDialogRef<PopUp>,
    @Inject(MAT_DIALOG_DATA) public data: any, public route: ActivatedRoute,  private toastr: ToastrService) {
    this.msgPopup = '';
  }
  clearText(){
    this.msgPopup = '';
  }
  close(): void {
    this.dialogRef.close(false);
  }
  submit(value){
    if (value != ''){
    this.toastr.success('Message Submitted Successful!.');
    this.close();
    }else{
      this.toastr.error('Please Fill The Message');
    }
  }
}
