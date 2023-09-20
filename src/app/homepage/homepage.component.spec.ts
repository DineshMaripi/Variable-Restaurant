import { of } from 'rxjs';
import { FoodItemService } from '../Services/fooditem.service';
import { HomepageComponent } from './homepage.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let mockFoodItemService: Partial<FoodItemService>;

  beforeEach(() => {
    mockFoodItemService = {
      getFoodItems: jasmine.createSpy().and.returnValue(of([])),
    };

    TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      imports: [HttpClientModule],
      providers: [{ provide: FoodItemService, useValue: mockFoodItemService }],
    });

    fixture = TestBed.createComponent(HomepageComponent);
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
  it('should call the fetch Data onInit method called', () => {
    const spyOnMethod = spyOn(component, 'ngOnInit');

    component.ngOnInit();

    expect(spyOnMethod).toHaveBeenCalled();
  });
});
