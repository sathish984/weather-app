import { Component, OnInit } from '@angular/core';
import { WeathersService } from './service/weathers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'weather-app';

  searchForms!: FormGroup;
  weather:any;
  

  constructor(private fb:FormBuilder, private service:WeathersService)
  {
     
  }

  ngOnInit(): void 
  {
      this.searchForms = this.fb.group({
        city: [null, Validators.required]
      })  
  }
  
  searchweather()
  {
    console.log(this.searchForms.value);
    this.service.searchweatherbycity(this.searchForms.get(['city'])!.value).subscribe((res)=>{
       console.log(res);
    this.weather = res.data;
    })
  }

 
}
