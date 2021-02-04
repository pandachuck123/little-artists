import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import { WINDOW } from '@ng-toolkit/universal';

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
  selector: 'app-teacher-report',
  templateUrl: './teacher-report.component.html',
  styleUrls: ['./teacher-report.component.scss']
})
export class TeacherReportComponent implements OnInit {
  name = new FormControl();

  public form: FormGroup;
  public name1: any;
  public PeriodicElement: any;
  displayedColumns: string[] = ['id', 'Student', 'teacher', 'timeslot', 'day', 'caption', 'comment'];

  options: User[] = [
    {name: 'Jonathan Ho Jia Jie'},
    {name: 'Mansha Sapra'},
    {name: 'Charlotte Teh'}
  ];

  // states: string[] = [
  //   'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  //   'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  //   'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  //   'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  //   'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  //   'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  //   'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  // ];

  filteredOptions: Observable<User[]>;

  constructor(@Inject(WINDOW) private window: Window, public fb: FormBuilder, public toast: ToastrService ) {
    this.PeriodicElement = [];

    this.PeriodicElement = [
      {id: 133, Student: 'Jonathan Ho Jia Jie', teacher: 'Muralindran', timeslot: '05:00 PM to 07:00 PM', day: 'Monday', caption: '', comment: 'Hello'},
      {id: 134, Student: 'Mansha Sapra', teacher: 'Muralindran', timeslot: '05:00 PM to 07:00 PM', day: 'Monday', caption: '', comment: 'Hello'},
      {id: 135, Student: 'Charlotte Teh', teacher: 'Muralindran', timeslot: '05:00 PM to 07:00 PM', day: 'Monday', caption: '', comment: 'Hello'},
      {id: 136, Student: 'Lee Ching', teacher: 'Muralindran', timeslot: '05:00 PM to 07:00 PM', day: 'Monday', caption: '', comment: 'Hello'},
      {id: 137, Student: 'Diya Mandal', teacher: 'Muralindran', timeslot: '05:00 PM to 07:00 PM', day: 'Monday', caption: '', comment: 'Hello'},
      {id: 138, Student: 'Laranya Bera', teacher: 'Muralindran', timeslot: '05:00 PM to 07:00 PM', day: 'Monday', caption: '', comment: 'Hello'},

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
