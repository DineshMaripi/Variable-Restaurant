import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { FoodItemService } from 'src/app/Services/fooditem.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent {
  data: any[] = [];
  filteredChickenItems: any[] = [];

  constructor(private foodItemService: FoodItemService,
    private cartService:CartService) {}

  ngOnInit() {
    this.foodItemService.getFoodItems().subscribe((response) => {
      this.data = response;
      this.filterChickenItems();
      console.log(response)
    });
  }

  filterChickenItems() {
    this.filteredChickenItems = this.data.filter(item => item.category === 'Chicken');
    console.log(this.filteredChickenItems)
  }

  addToCart(item:any){
    this.cartService.addToCart(item)
  }
}
