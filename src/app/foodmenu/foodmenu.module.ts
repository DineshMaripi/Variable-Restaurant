import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA if needed

import { BiryaniComponent } from './biryani/biryani/biryani.component';
import { ChickenComponent } from './chicken/chicken.component';
import { FishComponent } from './fish/fish.component';
import { MottonComponent } from './motton/motton.component';
import { SidenavComponent } from './sidenav/sidenav.component'; // Import your components

const routes: Routes = [
  { path: 'biryani', component: BiryaniComponent },
  { path: 'chicken', component: ChickenComponent },
  { path: 'motton', component: MottonComponent },
  { path: 'fish', component: FishComponent },
];

@NgModule({
  declarations: [
    BiryaniComponent,
    ChickenComponent,
    FishComponent,
    MottonComponent,
    SidenavComponent,
    // Add any other components or directives here
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Use CUSTOM_ELEMENTS_SCHEMA if needed
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Add any other required modules here
  ],
})
export class FoodmenuModule {}
