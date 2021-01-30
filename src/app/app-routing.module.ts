import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {ProjectSetupComponent} from "./project-setup/project-setup.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'login'}},
  { path: 'edit-user/:postId/edit', component: EditUserComponent, data: { breadcrumb: 'edit' } },
  { path: 'add', component: AddUserComponent, data: { breadcrumb: 'add' } },
  // { path: 'project-setup', component: ProjectSetupComponent, data: { breadcrumb: 'project' } },
  { path: 'student-master', component: ProjectSetupComponent, data: { breadcrumb: 'project' } },

  // {path: '', component: SideNavComponent, canActivate: [AuthGuardService], children: [
  {path: '', component: SideNavComponent, children: [
      {path: 'home', component: HomeComponent, data: {breadcrumb: 'home'}},
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
