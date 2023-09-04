import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Navbar/navbar.component';
import { SideBarComponent } from './SideBar/sidebar.component';
import { FoodItemComponent } from './Fooditems/fooditem.component';
import { FoodItemService } from './Services/fooditem.service';
import { RouterModule, Routes } from '@angular/router';
import { FoodmenuModule } from './foodmenu/foodmenu.module';
import { BiryaniComponent } from './foodmenu/biryani/biryani/biryani.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    FoodItemComponent,
    LoginComponent,
    ContactComponent,
    HomepageComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule,FoodmenuModule,FormsModule],
 
  providers: [FoodItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
