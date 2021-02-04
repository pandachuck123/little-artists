import { Component, OnInit } from '@angular/core';
import {WebcamImage} from "ngx-webcam";

@Component({
  selector: 'app-parent-camera',
  templateUrl: './parent-camera.component.html',
  styleUrls: ['./parent-camera.component.scss']
})
export class ParentCameraComponent implements OnInit {
  webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
  constructor() { }

  ngOnInit(): void {
  }


}
