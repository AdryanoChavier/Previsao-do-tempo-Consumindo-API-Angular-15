export interface WeahterDatas {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    tempo: number;
    feels_like: number;
    temp_min: number;
    tempo_max: number;
    pressure: number;
    humidity: number;
  },
  visibility: number;
  wind: {
    speed: number,
    deg: number
  },
  clouds:{
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone:number;
  id: number;
  name: string;
  cod: number;

}
