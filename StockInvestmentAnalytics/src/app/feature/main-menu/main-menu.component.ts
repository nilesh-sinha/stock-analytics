import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from '../../core/services/api-calling.service';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  stockData: any;
  constructor(private _apiCalling: ApiCallingService) { }

  ngOnInit() {
    this._apiCalling.getStockData('RELIANCE').subscribe((data)=>{
      this.stockData = data.json();
      console.log(this.stockData.dataset);
  });

}
