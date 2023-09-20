import { HttpClientModule } from '@angular/common/http';
import { BiryaniComponent } from './biryani.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodItemService } from 'src/app/Services/fooditem.service';
import { of } from 'rxjs';

describe('BiryaniComponent', () => {
  let component: BiryaniComponent;
  let fixture: ComponentFixture<BiryaniComponent>;
  let mockFoodItemService: Partial<FoodItemService>;

  beforeEach(() => {
    // Define the mockFoodItemService here
    mockFoodItemService = {
      getFoodItems: jasmine.createSpy().and.returnValue(of([])),
    };

    TestBed.configureTestingModule({
      declarations: [BiryaniComponent],
      imports: [HttpClientModule],
      providers: [{ provide: FoodItemService, useValue: mockFoodItemService }],
    });

    fixture = TestBed.createComponent(BiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(' should fetch and render food items on ngOnInit', () => {
    const dummyResponse: any[] = [];
    mockFoodItemService.getFoodItems = jasmine
      .createSpy()
      .and.returnValue(of(dummyResponse));
    expect(component.data).toEqual(dummyResponse);
  });
  it('should filter items with category "Biryani"', () => {
    // Arrange: Set up test data
    component.data = [
      { name: 'Biryani 1', category: 'Biryani' },
      { name: 'Non-Biryani 1', category: 'Non-Biryani' },
      { name: 'Biryani 2', category: 'Biryani' },
    ];
  
    // Act: Call the method to be tested
    component.filterBiryaniItems();
  
    // Assert: Check that the filteredBiryaniItems array contains the expected items
    expect(component.filteredBiryaniItems.length).toBe(2); // Expecting 2 items in the filtered array
    expect(component.filteredBiryaniItems[0].name).toBe('Biryani 1');
    expect(component.filteredBiryaniItems[1].name).toBe('Biryani 2');
  });
  
});
