import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-master',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.scss']
})
export class StudentMasterComponent implements OnInit {
  public searchStudent: FormGroup;
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

  constructor(public fb: FormBuilder, public toast: ToastrService, public router: Router) {

    this.searchStudent = this.fb.group({
      searchName : [''],

    });
    this.PeriodicElement = [];
    this.rows = [];
    this.temp = [];
    this.selected = [];
    this.PeriodicElement = [
      {id: 133, name: 'Jonathan Ho Jia Jie', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {id: 180, name: 'Mansha Sapra', teacher: 'N/A', class: 'BA', day: 'Sunday', timeslot: '02:45 PM to 04:45 PM'},
      {id: 498, name: 'Apoorva Nair', teacher: 'Muralindran', class: 'JP', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {id: 555, name: 'Charlotte Teh', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {id: 789, name: 'Lee Ching', teacher: 'Muralindran', class: 'BA', day: 'Thursday', timeslot: '02:45 PM to 04:45 PM'},
      {id: 6847, name: 'Diya Mandal', teacher: 'N/A', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {id: 7250, name: 'Laranya Bera', teacher: 'Muralindran', class: 'BA', day: 'Saturday', timeslot: '05:00 PM to 07:00 PM'},
      {id: 7615, name: 'Benjamin Dubs', teacher: 'N/A', class: 'BA', day: 'Thursday', timeslot: '02:45 PM to 04:45 PM'},
      {id: 7660, name: 'Jason Ling', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '02:45 PM to 04:45 PM'},
      {id: 7727, name: 'Shruti Mahindrakar', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {id: 133, name: 'Jonathan Ho Jia Jie', teacher: 'N/A', class: 'BA', day: 'Tuesday', timeslot: '01:00 PM to 03:00 PM'},
      {id: 133, name: 'John', teacher: 'Muralindran', class: 'BA', day: 'Monday', timeslot: '05:00 PM to 07:00 PM'},
      {id: 133, name: 'Jonathan Ho Jia Jie', teacher: 'N/A', class: 'BA', day: 'Tuesday', timeslot: '05:00 PM to 07:00 PM'}


    ];

    this.total = this.PeriodicElement.length;
    this.rows = this.PeriodicElement;
    this.temp = this.PeriodicElement;

    this.length = this.PeriodicElement.length;

  }

  ngOnInit(): void {
  }


  updateFilter(value) {
    let searchStudentValue= value.searchName;
    console.log(value,'value....')
    console.log(searchStudentValue,'searchValue....')
    const val = searchStudentValue.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  view(){
    // console.log(event,'event...')
    // console.log(i,'i...')
    // this.router.navigate(['/Camera'  + '/' + true]);
    this.router.navigate(['/Edit-Student-Master']);
  }



}
