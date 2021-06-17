
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LaptopComponent } from './laptop/laptop.component';
import { CameraComponent } from './camera/camera.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

const appRoutes:Routes=[

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'laptop',component : LaptopComponent},
  {path:'camera',component : CameraComponent},
  {path:'mobilephone',component : MobilePhoneComponent},
  {path:'cart',component : CartComponent},
  {path:'login',component : LoginComponent},
  {path:'admin',component : AdminComponent},
  {path:'**',component : ErrorPageComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LaptopComponent,
    CameraComponent,
    MobilePhoneComponent,
    CartComponent,
    LoginComponent,
    ErrorPageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
