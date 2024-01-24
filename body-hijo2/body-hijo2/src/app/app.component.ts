import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'body-hijo2';

  imageUrl1 = assetUrl('slider1.jpg');
  imageUrl2 = assetUrl('slider2.jpg');
  imageUrl3 = assetUrl('slider3.jpg');

// Works great with single-spa
}
