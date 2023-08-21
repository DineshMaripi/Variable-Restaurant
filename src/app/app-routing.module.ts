import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FoodItemComponent } from './Fooditems/fooditem.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: FoodItemComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'signup', component: SignupComponent}
  // other routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
