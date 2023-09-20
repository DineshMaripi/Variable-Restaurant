import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent {
  cartItemsCount=0
  constructor(private cartService:CartService){}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items:any) => {
      this.cartItemsCount = items.reduce((total:any, item:any) => total + item.quantity, 0);
    });
  }
}
