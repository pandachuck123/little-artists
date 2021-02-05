import { Component, OnInit } from '@angular/core';
import {WebcamImage} from "ngx-webcam";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Observable, Subject} from "rxjs";
import {FileService} from "../shared/file.service";
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-parent-camera',
  templateUrl: './parent-camera.component.html',
  styleUrls: ['./parent-camera.component.scss']
})
export class ParentCameraComponent implements OnInit {
  public studentArray: FormGroup;
  public items: any;
  public webcamImage: WebcamImage = null;
  public showWebcam: any ;
  public PeriodicElement: any ;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }


  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  constructor(private fileService: FileService, public fb: FormBuilder) {
    this.showWebcam = true;
    this.PeriodicElement = [];
    this.studentArray = this.fb.group({
      items: this.fb.array([])
    });
    this.items = this.studentArray.get('items') as FormArray;
    console.log(this.items, 'this.items....')
    this.items.push(this.initItemRows());

  }


  ngOnInit(): void {

  }
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

  handleImage(webcamImage: WebcamImage): void {
    console.log('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.showWebcam = false;
    // this.download(webcamImage);
    this.download();
  }


  download() {
    this.fileService.downloadFile().subscribe(response => {
      let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      //window.open(url);
      //window.location.href = response.url;
      fileSaver.saveAs(blob, 'employees.json');
    }), error => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }

  studentEdit(i, value){

    console.log(i,'i...');
    console.log(value,'value');
    console.log('Successfully');
  }




}
