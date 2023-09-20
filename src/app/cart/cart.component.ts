import { Component, OnDestroy } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((items) => {
        this.cartItems = items;
        console.log(this.cartItems);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
