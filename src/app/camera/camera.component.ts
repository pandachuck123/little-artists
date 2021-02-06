import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from "ngx-webcam";
import {Observable, Subject} from "rxjs";
import {FileService} from "../shared/file.service";
import * as fileSaver from 'file-saver';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  public studentArray: FormGroup;
  public items: any;

  public selectedFile: any ;
  // @ViewChild("video")
  // public video: ElementRef;
  //
  // @ViewChild("canvas")
  // public canvas: ElementRef;
  //
  // public captures: Array<any>;

  constructor(private fileService: FileService, public fb: FormBuilder) {
    this.selectedFile = null;
    this.studentArray = this.fb.group({
      items: this.fb.array([])
    });
    this.items = this.studentArray.get('items') as FormArray;
    console.log(this.items, 'this.items....')
    this.items.push(this.initItemRows());

    // this.captures = [];

  }


  ngOnInit(): void {

  }
  // public ngAfterViewInit() {
  //   // const player = document.getElementById('player');
  //   // const canvas = document.getElementById('canvas');
  //   // const context = this.canvas.nativeElement.getContext('2d');
  //   // const captureButton = document.getElementById('capture');
  //   //
  //   // const constraints = {
  //   //   video: true,
  //   //   audio: false
  //   // };
  //   //
  //   // captureButton.addEventListener('click', () => {
  //   //   // Draw the video frame to the canvas.
  //   //   context.drawImage(player, 0, 0, 640, 480);
  //   // });
  //   //
  //   // navigator.mediaDevices.getUserMedia(constraints)
  //   //   .then((stream) => {
  //   //     this.video.nativeElement.src = stream;
  //   //   });
  //   // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  //       this.video.nativeElement.src = stream;
  //       this.video.nativeElement.play();
  //     });
  //   // }
  //
  // }
  initItemRows() {
    return this.fb.group({
      id: [''],
      student: [''],
      teacher: [''],
      class: [''],
      day: [''],
      time: [''],
      
    });
  }
  // capture() {
  //   let context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 300, 300);
  //   this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  // }

  onFileSelected(event) {
    console.log(event,'event...');
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile,'selectedFile...');
  }

  onUpload()
  {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }




}
