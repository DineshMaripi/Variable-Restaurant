
import { Binary } from '@angular/compiler';
import { Component } from '@angular/core';
import { State } from '@ngrx/store';
import { FoodItemService } from '../Services/fooditem.service';
import { CartService } from '../Services/cart.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent {
  
 imageSlide=[
  {
    image:'',
    thumbImage:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
    alt:'image1',
    title:'Binary'
  }, {
    image:'',
    thumbImage:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
    alt:'image2',
    title:'Pizza'
  }, {
    image:'',
    thumbImage:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
    alt:'image3',
    title:'Chicken'
  }, {
    image:'',
    thumbImage:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',
    alt:'image4',
    title:'Thali'
  }, {
    image:'',
    thumbImage:'https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png',
    alt:'image5',
    title:'FriedRice'
  }

 ]

 data:any[]=[]

constructor(private foodItemService:FoodItemService,private cartService:CartService){}

ngOnInit(): void {
  this.foodItemService.getFoodItems().subscribe((response)=>{
     this.data=response
     console.log(response)
  })}
  addToCart(item:any){
    this.cartService.addToCart(item)
  }
}
