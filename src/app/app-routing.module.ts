import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'login'}},
  // {path: 'search', component: SearchStudentComponent, data: {breadcrumb: 'search '}},
  {path: 'searches', component: SearchComponent, data: {breadcrumb: 'searches '}},

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
