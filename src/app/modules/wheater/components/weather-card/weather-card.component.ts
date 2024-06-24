import { WeahterDatas } from 'src/app/models/interfaces/weatherDatas';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
 @Input() weatherDatas!: WeahterDatas;

}
