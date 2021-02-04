import {Component, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

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
  public search: FormGroup;
  public PeriodicElement: any;
  public pageSize: any;
  public pageIndex: any;
  public pageSizeOptions: any;
  public showFirstLastButtons: any;
  public length: any;
  public temp: any;
  public rows: any;
  public data: any;
  public total: any;
  public selected: any;

  columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(public fb: FormBuilder, public toast: ToastrService) {

    this.search = this.fb.group({
      searchName : [''],

    });
    this.PeriodicElement = [];
    this.rows = [];
    this.temp = [];
    this.selected = [];
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

    this.total = this.PeriodicElement.length;
    this.rows = this.PeriodicElement;
    this.temp = this.PeriodicElement;

    this.length = this.PeriodicElement.length;

  }

  ngOnInit(): void {
  }


  updateFilter(value) {
    let searchValue= value.searchName;
    console.log(value,'value....')
    console.log(searchValue,'searchValue....')
    const val = searchValue.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }



}
