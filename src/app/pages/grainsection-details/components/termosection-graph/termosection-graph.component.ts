import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import { TermoSection } from "../../../../shared/interfaces/models/TermoSection";

@Component({
  selector: 'app-termosection-graph',
  templateUrl: './termosection-graph.component.html',
  styleUrls: ['./termosection-graph.component.scss']
})
export class TermosectionGraphComponent implements OnInit {
  public chartOptions: any;
  public highcharts: typeof Highcharts = Highcharts;
  // @ts-ignore
  @Input() data: TermoSection[];

  ngOnInit() {
    this.lineChart();
  }

  private lineChart() {
    const dates: string[] = [];
    for (let i = 0; i < this.data.length; i++) {
      const date = new Date(this.data[i].time);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
      const withSlashes = [day, month, year, time].join('/');
      dates.push(withSlashes);
    }
    let chartData: any;
    const temperatures: number[] = [];
    for (let i = 0; i < this.data.length; i++) {
      const temperature = this.data[i].temperature;
      temperatures.push(temperature);
    }
    chartData = {name: 'temperature', data: temperatures};
    this.chartOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: `Level ${this.data[0].heightLevel}`
      },
      xAxis: {
        categories: dates
      },
      yAxis:{
        title:{
          text:'Temperature °C'
        }
      },
      series: [chartData]
    }
  }
}
