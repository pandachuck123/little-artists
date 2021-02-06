import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
// import {SearchComponent} from "./search/search.component";
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
import {AddUserComponent} from "./add-user/add-user.component";
import {ProjectSetupComponent} from "./project-setup/project-setup.component";
import {CameraComponent} from "./camera/camera.component";
import {ParentCameraComponent} from "./parent-camera/parent-camera.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {SearchStudentComponent} from "./search-student/search-student.component";

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent, data: { breadcrumb: 'login'}},
  // {path: '', component: SideNavComponent, canActivate: [AuthGuardService], children: [
  {path: '', component: SideNavComponent, children: [
      {path: 'Home', component: HomeComponent, data: {breadcrumb: 'home'}},
      {path: 'Gallery', component: GalleryComponent, data: {breadcrumb: 'gallery'}},
      {path: 'Generate-Certificate', component: GenerateCertificateComponent, data: {breadcrumb: 'generate-certificate'}},
      {path: 'Searches', component: AddUserComponent, data: {breadcrumb: 'searches'}},
      {path: 'Message', component: MessageComponent, data: {breadcrumb: 'Message'}},
      {path: 'Multi-Student-Report', component: MultiStudentReportComponent, data: {breadcrumb: 'multi-student-report'}},
      {path: 'Password-Creation', component: PasswordCreationComponent, data: {breadcrumb: 'password-creation'}},
      {path: 'Query-Tracker', component: QueryTrackerComponent, data: {breadcrumb: 'query-tracker'}},
      {path: 'Student-Master', component: StudentMasterComponent, data: {breadcrumb: 'student-master'}},
      {path: 'Teacher-Report', component: TeacherReportComponent, data: {breadcrumb: 'teacher-report'}},
      {path: 'Today-Slot', component: TodaySlotComponent, data: {breadcrumb: 'today-slot'}},
      {path: 'Upload-Student', component: UploadStudentComponent, data: {breadcrumb: 'upload-student'}},
      {path: 'Project-Setup', component: ProjectSetupComponent, data: {breadcrumb: 'project-setup'}},
      {path: 'Search', component: SearchStudentComponent, data: {breadcrumb: 'Search-Student'}},
      {path: 'edit-user/:postId/edit', component: EditUserComponent, data: {breadcrumb: 'edit-user'}},
      {path: 'Edit-Student-Master', component: CameraComponent, data: {breadcrumb: 'camera'}},
      {path: 'Edit-Today-Slot', component: ParentCameraComponent, data: {breadcrumb: 'camera'}},
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
