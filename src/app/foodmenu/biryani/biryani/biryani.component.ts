import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { FoodItemService } from 'src/app/Services/fooditem.service';


@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.css']
})
export class BiryaniComponent {
  data: any[] = [];
  filteredBiryaniItems: any[] = []; // Corrected variable name

  constructor(private foodItemService: FoodItemService ,
   private cartService:CartService ) {}

  ngOnInit(): void {
    this.foodItemService.getFoodItems().subscribe((response) => {
      this.data = response;
      this.filterBiryaniItems(); // Corrected function name
    });
  }

  filterBiryaniItems() {
    // Filter the items with category 'Biryani'
    this.filteredBiryaniItems = this.data.filter(item => item.category === 'Biryani');
    console.log(this.filteredBiryaniItems)
  }

  addToCart(item:any){
    this.cartService.addToCart(item)
  }
}

