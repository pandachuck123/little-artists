import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {map, startWith} from "rxjs/operators";
import {DateAdapter, MAT_DATE_FORMATS} from "@angular/material/core";
// import {User} from "../teacher-report/teacher-report.component";
import {WINDOW} from "@ng-toolkit/universal";
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
export interface User {
  name: string;
}
@Component({
  selector: 'app-multi-student-report',
  templateUrl: './multi-student-report.component.html',
  styleUrls: ['./multi-student-report.component.scss'],
  // providers: [
  //   {
  //     provide: DateAdapter, useClass: AppDateAdapter
  //   },
  //   {
  //     provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
  //   }
  // ]

})
export class MultiStudentReportComponent implements OnInit{
  name = new FormControl();
  date = new FormControl(new Date());
  date2 = new FormControl(new Date());

  public form: FormGroup;
  public name1: any;
  public PeriodicElement: any;
  displayedColumns: string[] = ['id', 'Student', 'date', 'date2'];

  options: User[] = [
    {name: 'Jonathan Ho Jia Jie'},
    {name: 'Mansha Sapra'},
    {name: 'Charlotte Teh'}
  ];

  filteredOptions: Observable<User[]>;

  constructor(@Inject(WINDOW) private window: Window, public fb: FormBuilder, public toast: ToastrService ) {
    this.PeriodicElement = [];

    this.PeriodicElement = [
      {id: 133, Student: 'Jonathan Ho Jia Jie', date:'2/11/2019', date2:'2/11/2020'},
      {id: 133, Student: 'Mansha Sapra', date:'2/11/2019', date2:'2/11/2020'},
      {id: 133, Student: 'Charlotte Teh', date:'2/11/2019', date2:'2/11/2020'},
      {id: 133, Student: 'Lee Ching', date:'2/11/2019', date2:'2/12/2020'}
    ];
    this.form = this.fb.group({
      name : [''],
    });

  }

  ngOnInit() {
    this.filteredOptions = this.name.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );


  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }


  submit(value){
    console.log(value, 'value...');
    this.name1 = this.name.value;

  }
  // this.image.push(this.form.value);
  // for (let i = 0; i < this.image.length; i++ ){
  //   // this.create(i);
  // }

}
