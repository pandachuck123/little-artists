import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from "ngx-webcam";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  // @ViewChild('videoElement') videoElement: any;
  // public video: any;
  // public browser: any;
  // public displayControls: any;
  //
  // constructor() { }
  //
  // ngOnInit(): void {
  //   this.video = this.videoElement.nativeElement;
  // }
  //
  // start() {
  //   this.initCamera({ video: true, audio: false });
  // }
  // sound() {
  //   this.initCamera({ video: true, audio: true });
  // }
  //
  // initCamera(config: any) {
  //   this.browser =  navigator;
  //
  //   this.browser.getUserMedia = (this.browser.getUserMedia ||
  //     this.browser.webkitGetUserMedia ||
  //     this.browser.mozGetUserMedia ||
  //     this.browser.msGetUserMedia);
  //
  //   this.browser.mediaDevices.getUserMedia(config).then(stream => {
  //     this.video.src = window.URL.createObjectURL(stream);
  //     this.video.play();
  //   });
  // }
  //
  // pause() {
  //   this.video.pause();
  // }
  //
  // toggleControls() {
  //   this.video.controls = this.displayControls;
  //   this.displayControls = !this.displayControls;
  // }
  //
  // resume() {
  //   this.video.play();
  // }
  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  constructor() { }


  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
  }

  takeSnapshot(): void {
    this.trigger.next();
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.showWebcam = false;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }



}
