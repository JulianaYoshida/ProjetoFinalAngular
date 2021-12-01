import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'login', component: LoginPageComponent },
  

];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
