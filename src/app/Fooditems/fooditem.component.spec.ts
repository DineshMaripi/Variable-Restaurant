import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodItemComponent } from './fooditem.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodItemService } from '../Services/fooditem.service';
import { of } from 'rxjs';
import { CartService } from '../Services/cart.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('FoodItemComponent', () => {
  let component: FoodItemComponent;
  let fixture: ComponentFixture<FoodItemComponent>;
  let mockFoodItemService: Partial<FoodItemService>;
  let mockCartService:Partial<CartService>
  let debugElement:DebugElement
let item:any
  beforeEach( () => {
    mockFoodItemService = {
      getFoodItems: jasmine.createSpy().and.returnValue(of([])),
     
    };
    mockCartService={
      addToCart:jasmine.createSpy().and.returnValue(of(item))
    }

     TestBed.configureTestingModule({
      declarations: [FoodItemComponent],
      imports: [HttpClientModule],
      providers: [{ provide: FoodItemService, useValue: mockFoodItemService },{provide:CartService,useValue:mockCartService}],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check debugElement', () => {
    // Query the element by CSS selector
    const buttonElement = debugElement.query(By.css('.title'));

    // Check the text content of the element
    expect(buttonElement.nativeElement.textContent).toBe('fooditems');
  });

it('should check debugElement', () => {
  // Query the element by CSS selector
  const buttonElement = debugElement.query(By.css('.button'));

  // Trigger a click event on the button element
  buttonElement.triggerEventHandler('click', null);

  // Add your assertions or test the component's behavior after the click event
});








  it('should fetch and render food items on ngOnInit', () => {
    const dummyResponse: any[] = [
      {
        name: 'Chicken Biryani',
        cost: '₹325',
        image: 'https://example.com/biryani.jpg',
      },
      {
        name: 'Paneer Tikka',
        cost: '₹250',
        image: 'https://example.com/paneer.jpg',
      },
      
    ];

    // Spy on mockFoodItemService.getFoodItems method
    mockFoodItemService.getFoodItems = jasmine
      .createSpy()
      .and.returnValue(of(dummyResponse));

    // Call ngOnInit manually
    component.ngOnInit();

    // Expect the getFoodItems method to have been called
    expect(mockFoodItemService.getFoodItems).toHaveBeenCalled();

    // Expect the component data to be updated
    expect(component.data).toEqual(dummyResponse);

    // Trigger change detection to update the rendered template
    fixture.detectChanges();

    // Get all the rendered card elements
    const cardElements = fixture.nativeElement.querySelectorAll('.card');

    // Expect the number of rendered cards to match the number of items in dummyResponse
    expect(cardElements.length).toBe(dummyResponse.length);

    // Loop through each card and check the rendered content
    cardElements.forEach((cardElement: any, index: any) => {
      const item = dummyResponse[index];

      // Check card title
      expect(cardElement.querySelector('.card-title').textContent).toContain(
        item.name
      );

      // Check card text
      expect(cardElement.querySelector('.card-text').textContent).toContain(
        `Cost: ${item.cost}`
      );

      // Check card image source
      expect(
        cardElement.querySelector('.card-img-top').getAttribute('src')
      ).toBe(item.image);
    });
  });


});
