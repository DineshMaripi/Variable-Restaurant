import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  
})
export class ImageSliderComponent {

    
  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage:'https://img.freepik.com/premium-psd/food-restaurant-web-banner-template-with-modern-elegant-design_221638-252.jpg?size=626&ext=jpg&ga=GA1.1.1730138493.1691329804&semt=ais',
    alt:'image1',
  
}, {
    image: 'https://img.freepik.com/free-psd/horizontal-banner-healthy-salad-lunch_23-2148715623.jpg?size=626&ext=jpg&ga=GA1.1.1730138493.1691329804&semt=ais',
    thumbImage:'https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-726.jpg?size=626&ext=jpg&ga=GA1.2.1730138493.1691329804&semt=ais',
    alt:'image2'
}, {
    image: 'https://img.freepik.com/free-psd/web-banner-template-japanese-restaurant_23-2148203257.jpg?size=626&ext=jpg&ga=GA1.2.1730138493.1691329804&semt=ais',
    thumbImage:'https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_106176-1424.jpg?size=626&ext=jpg&ga=GA1.1.1730138493.1691329804&semt=ais',
    alt:'image3'
},{
    image: 'https://img.freepik.com/free-psd/american-food-template-banner_23-2148518784.jpg?size=626&ext=jpg&ga=GA1.2.1730138493.1691329804&semt=ais',
    thumbImage:'https://img.freepik.com/premium-psd/food-menu-restaurant-horizontal-web-banner-template_120329-348.jpg?size=626&ext=jpg&ga=GA1.2.1730138493.1691329804&semt=ais',
    alt:'image4'
}, {
    image: 'https://img.freepik.com/premium-psd/food-menu-promotion-flyer_502896-158.jpg?size=626&ext=jpg&ga=GA1.1.1730138493.1691329804&semt=ais',
    thumbImage:'https://img.freepik.com/free-vector/healthy-food-banner-template_23-2148805673.jpg?size=626&ext=jpg&ga=GA1.2.1730138493.1691329804&semt=ais',
    alt:'image5'
}, {
    image: 'https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-726.jpg?size=626&ext=jpg&ga=GA1.2.1730138493.1691329804&semt=ais',
    thumbImage:'https://img.freepik.com/premium-psd/food-menu-restaurant-web-banner-template_120329-450.jpg?size=626&ext=jpg&ga=GA1.1.1730138493.1691329804&semt=ais',
    alt:'image6'
}];
    
  
}
