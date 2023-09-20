import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();

  addToCart(item: any) {
    const existingItem = this.cartItemsSubject.value.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      // Increase the quantity if the item already exists in the cart
      existingItem.quantity++;
      this.cartItemsSubject.next(this.cartItemsSubject.value);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      const updatedCartItems = [...this.cartItemsSubject.value, { ...item, quantity: 1 }];
      this.cartItemsSubject.next(updatedCartItems); // Emit updated value
    }
  }

  getCartItems(): Observable<any[]> {
    return this.cartItems$;
  }
}
