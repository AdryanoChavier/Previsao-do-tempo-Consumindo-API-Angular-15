import { WeahterDatas } from 'src/app/models/interfaces/weatherDatas';
import { WeatherService } from '../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: [],
})
export class WeatherComponent implements OnInit,OnDestroy  {

  initialCityName = 'São Paulo';
  weatherDatas! : WeahterDatas;
  private readonly destroy$: Subject<void> = new Subject();
  searchIcon = faMagnifyingGlass;


  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error),
    });
  }

OnSubmit(): void{
  this.getWeatherDatas(this.initialCityName);
  this.initialCityName = '';

}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}


}
