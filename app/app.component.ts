import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {NgFor} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

//let linechart = require('html/linechart');

@Component({
  selector: 'my-app',
  template: `
	<div class="row">
	  <div class="col-md-6">
	    <base-chart class="chart" 
	                [datasets]="lineChartData"
	                [labels]="lineChartLabels"
	                [options]="lineChartOptions"
	                [colors]="lineChartColours"
	                [legend]="lineChartLegend"
	                [chartType]="lineChartType"
	                (chartHover)="chartHovered($event)"
	                (chartClick)="chartClicked($event)"></base-chart>
	  </div>
	  <div class="col-md-6" style="margin-bottom: 10px;">
	    <table class="table table-responsive table-condensed">
	      <tr>
	        <th *ngFor="let label of lineChartLabels">{{label}}</th>
	      </tr>
	      <tr *ngFor="let d of lineChartData">
	        <td *ngFor="let label of lineChartLabels; let j=index">{{d && d.data[j]}}</td>
	      </tr>
	    </table>
	    <button (click)="randomize()">CLICK</button>
	  </div>
	</div>
  `,
  styles: [`
	.chart {display: block; width: 100%; border: 1px solid black;}
  `],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES, NgFor]
})

export class AppComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColours:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}