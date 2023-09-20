import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Navbar/navbar.component';
import { SideBarComponent } from './SideBar/sidebar.component';
import { FoodItemComponent } from './Fooditems/fooditem.component';
import { FoodItemService } from './Services/fooditem.service';
import { FoodmenuModule } from './foodmenu/foodmenu.module';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    FoodItemComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    ImageSliderComponent,
    CartComponent,
  ],
  imports: [
    NgImageSliderModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FoodmenuModule,
    FormsModule,
  ],

  providers: [FoodItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
