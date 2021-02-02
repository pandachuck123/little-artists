import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  teacher: string;
  symbol: string;
  class: string;
  day: string;
  timeslot: string;
  // action: string;
}



@Component({
  selector: 'app-today-slot',
  templateUrl: './today-slot.component.html',
  styleUrls: ['./today-slot.component.scss']
})
export class TodaySlotComponent implements OnInit {
  public PeriodicElement: any;
  public pageSize: any;
  public pageIndex: any;
  public pageSizeOptions: any;
  public showFirstLastButtons: any;
  public PeriodicElements: any;
  public length: any;

  displayedColumns: string[] = ['position', 'name', 'teacher', 'class', 'day', 'timeslot'];

  constructor() {
    // const dataSource = ELEMENT_DATA;
    this.pageSizeOptions = [];
    this.PeriodicElement = [];
    this.PeriodicElement = [
      {position: 133, name: 'Jonathan Ho Jia Jie', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {position: 180, name: 'Mansha Sapra', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '02:45 PM to 04:45 PM'},
      {position: 498, name: 'Apoorva Nair', teacher: 'Muralindran', class: 'JP', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {position: 555, name: 'Charlotte Teh', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {position: 789, name: 'Lee Ching', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '02:45 PM to 04:45 PM'},
      {position: 6847, name: 'Diya Mandal', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {position: 7250, name: 'Laranya Bera', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {position: 7615, name: 'Benjamin Dubs', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '02:45 PM to 04:45 PM'},
      {position: 7660, name: 'Jason Ling', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '02:45 PM to 04:45 PM'},
      {position: 7727, name: 'Shruti Mahindrakar', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {position: 133, name: 'Jonathan Ho Jia Jie', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {position: 133, name: 'Jonathan Ho Jia Jie', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {position: 133, name: 'Jonathan Ho Jia Jie', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'}


    ];
    this.length = this.PeriodicElement.length;
    // pageSize = 10;
    this.pageIndex = 0;
    this.pageSizeOptions = [5, 10, 25];
    this.showFirstLastButtons = true;
  }

  ngOnInit(): void {
    // this.selectArray();
  }
  // selectArray(){
  //   // this.splitArray(this.PeriodicElement);
  //
  // }
  handlePageEvent(event) {
    console.log(this.length,'this.length...')
    this.length = this.PeriodicElement.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.PeriodicElement.length = this.pageSize;
    // this.splitArray(this.PeriodicElement, this.pageSize);
  }

  // splitArray(myArray, value){
  //   alert('inn')
  //   let arrayLength = myArray.length
  //   let tempArray = [];
  //   for (let i = 0; i < arrayLength; i += value) {
  //     let myChunk = myArray.slice(i, i + value);
  //     console.log(myChunk,'myChunk...');
  //     this.PeriodicElements = myChunk;
  //     // console.log(this.PeriodicElement,'tempArray...');
  //     // Do something if you want with the group
  //     // tempArray.push(myChunk);
  //     // console.log(tempArray,'tempArray...');
  //   }
  // }

}
