import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-my-billing-chart',
  templateUrl: './my-billing-chart.component.html',
  styleUrls: ['./my-billing-chart.component.scss']
})
export class MyBillingChartComponent implements OnInit {
  @ViewChild('charts') public chartEl: ElementRef;

  constructor() { }

  ngOnInit() {
    Highcharts.chart(this.chartEl.nativeElement, this.myOptions);
  }

  myOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Facturación año'
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      data: [100, 300, 200, 500, 110, 250, 300, 900, 235, 400, 400, 490]
    }]
  };

}
