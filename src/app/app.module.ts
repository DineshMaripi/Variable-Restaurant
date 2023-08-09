import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Navbar/navbar.component';
import { SideBarComponent } from './SideBar/sidebar.component';
import { FoodItemComponent } from './Fooditems/fooditem.component';
import { FoodItemService } from './Services/fooditem.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    FoodItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FoodItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
