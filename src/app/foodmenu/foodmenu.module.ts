import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiryaniComponent } from './biryani/biryani/biryani.component';
import { ChickenComponent } from './chicken/chicken.component';
import { FishComponent } from './fish/fish.component';
import { MottonComponent } from './motton/motton.component';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from '../SideBar/sidebar.component';


@NgModule({
  declarations: [
    BiryaniComponent,
    ChickenComponent,
    FishComponent,
    MottonComponent
   
  ],
  imports: [
    CommonModule,
   
  ]
})
export class FoodmenuModule { }
