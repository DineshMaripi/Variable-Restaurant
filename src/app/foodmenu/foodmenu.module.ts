import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiryaniComponent } from './biryani/biryani/biryani.component';
import { ChickenComponent } from './chicken/chicken.component';
import { FishComponent } from './fish/fish.component';
import { MottonComponent } from './motton/motton.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  { path: '', component: BiryaniComponent }
];

@NgModule({
  declarations: [
    BiryaniComponent,
    ChickenComponent,
    FishComponent,
    MottonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodmenuModule { }
