import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodItemComponent } from './fooditem.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodItemService } from '../Services/fooditem.service';
import { of } from 'rxjs';

describe('FoodItemComponent', () => {
  let component: FoodItemComponent;
  let fixture: ComponentFixture<FoodItemComponent>;
  let mockFoodItemService: Partial<FoodItemService>;

  beforeEach( () => {
    mockFoodItemService = {
      getFoodItems: jasmine.createSpy().and.returnValue(of([])),
    };

     TestBed.configureTestingModule({
      declarations: [FoodItemComponent],
      imports: [HttpClientModule],
      providers: [{ provide: FoodItemService, useValue: mockFoodItemService }],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  // Add more test cases as needed
});
