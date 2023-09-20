import { Component ,OnInit} from '@angular/core';
import { FoodItemService } from '../Services/fooditem.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/cart.service';
@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css'],
})
export class FoodItemComponent implements OnInit {
data:any[]=[]

constructor(private foodItemService:FoodItemService,
  private cartService:CartService){}

ngOnInit(): void {
  this.foodItemService.getFoodItems().subscribe((response)=>{
     this.data=response
     console.log(response)
  })

 
}
addToCart(item:any){
  this.cartService.addToCart(item)
}

}