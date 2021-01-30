import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {SearchComponent} from "./search/search.component";
import {GenerateCertificateComponent} from "./generate-certificate/generate-certificate.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {MessageComponent} from "./message/message.component";
import {MultiStudentReportComponent} from "./multi-student-report/multi-student-report.component";
import {QueryTrackerComponent} from "./query-tracker/query-tracker.component";
import {UploadStudentComponent} from "./upload-student/upload-student.component";
import {PasswordCreationComponent} from "./password-creation/password-creation.component";
import {StudentMasterComponent} from "./student-master/student-master.component";
import {TeacherReportComponent} from "./teacher-report/teacher-report.component";
import {TodaySlotComponent} from "./today-slot/today-slot.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'login'}},
  // {path: '', component: SideNavComponent, canActivate: [AuthGuardService], children: [
  {path: '', component: SideNavComponent, children: [
      {path: 'home', component: HomeComponent, data: {breadcrumb: 'home'}},
      {path: 'gallery', component: GalleryComponent, data: {breadcrumb: 'gallery'}},
      {path: 'generate-certificate', component: GenerateCertificateComponent, data: {breadcrumb: 'generate-certificate'}},
      {path: 'searches', component: SearchComponent, data: {breadcrumb: 'searches'}},
      {path: 'message', component: MessageComponent, data: {breadcrumb: 'Message'}},
      {path: 'multi-student-report', component: MultiStudentReportComponent, data: {breadcrumb: 'multi-student-report'}},
      {path: 'password-creation', component: PasswordCreationComponent, data: {breadcrumb: 'password-creation'}},
      {path: 'query-tracker', component: QueryTrackerComponent, data: {breadcrumb: 'query-tracker'}},
      {path: 'student-master', component: StudentMasterComponent, data: {breadcrumb: 'student-master'}},
      {path: 'teacher-report', component: TeacherReportComponent, data: {breadcrumb: 'teacher-report'}},
      {path: 'today-slot', component: TodaySlotComponent, data: {breadcrumb: 'today-slot'}},
      {path: 'upload-student', component: UploadStudentComponent, data: {breadcrumb: 'upload-student'}},
    ]
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, initialNavigation: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
