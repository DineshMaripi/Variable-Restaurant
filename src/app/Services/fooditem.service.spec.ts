import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FoodItemService } from './fooditem.service';

describe('FoodItemService', () => {
  let service: FoodItemService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodItemService],
    });

    // Inject the service and HttpTestingController from the test bed
    service = TestBed.inject(FoodItemService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that there are no outstanding HTTP requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve food items from the API via GET', () => {
    const mockResponse = [
      { name: 'Item 1', cost: '₹100' },
      { name: 'Item 2', cost: '₹150' },
      // Add more mock data
    ];

    // Call the service method
    service.getFoodItems().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    // Set up a mock request and respond with the mockResponse
    const req = httpMock.expectOne('assets/Data/fooditem.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
