import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { dataMonth } from './data-month';
import { dataQuarter } from './data-quarter';

@Component({
  selector: 'app-comparative-chart-billing',
  templateUrl: './comparative-chart-billing.component.html',
  styleUrls: ['./comparative-chart-billing.component.scss']
})
export class ComparativeChartBillingComponent implements OnInit {
  @ViewChild('charts') public chartEl: ElementRef;

  dataService: any;
  periods: Array<string> = ['MES', 'TRIMESTRE', 'SEMESTRE', 'AÑO'];
  indexLbl: number;

  get getGroupLabels() {
    return this.dataService.me.group_labels;
  }

  constructor() { }

  ngOnInit() {
    this.getBillingComparison();
  }

  getBillingComparison = (period = 0) => {
    this.dataService = period === 0 ? dataMonth : dataQuarter;
    this.indexLbl = this.dataService.me.current_period;
    this.setChart();
  }

  changePeriods(period) {
    this.getBillingComparison(period);
  }

  selectPeriod(index) {
    this.indexLbl = index;
    this.setChart();
  }

  setChart = () => {
    const options = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Facturación año'
      },
      xAxis: {
        categories: this.dataService.me.billing_data[this.indexLbl].labels
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
          stacking: 'normal',
          cursor: 'pointer',
        },
      },
      series: [{
        data: this.dataService.me.billing_data[this.indexLbl].values,
        color: 'rgba(0, 118, 255,1)',
        showInLegend: false,
      }]
    };
    Highcharts.chart(this.chartEl.nativeElement, options);
  }

}
