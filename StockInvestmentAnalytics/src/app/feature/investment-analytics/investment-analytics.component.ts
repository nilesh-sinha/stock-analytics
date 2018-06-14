import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-investment-analytics',
  templateUrl: './investment-analytics.component.html',
  styleUrls: ['./investment-analytics.component.css']
})
export class InvestmentAnalyticsComponent implements OnInit {
  @Input() tableData: any;
  constructor() { }

  ngOnInit() {
  }

}
