import { Component ,OnInit} from '@angular/core';
import { FoodItemService } from '../Services/fooditem.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css'],
})
export class FoodItemComponent implements OnInit {
data:any[]=[]

constructor(private foodItemService:FoodItemService){}

ngOnInit(): void {
  this.foodItemService.getFoodItems().subscribe((response)=>{
     this.data=response
     console.log(response)
  })
}}