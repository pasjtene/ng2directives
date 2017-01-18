import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sensor-filter',
  templateUrl: './sensor-filter.component.html',
  styleUrls: ['./sensor-filter.component.css']
})
export class SensorFilterComponent implements OnInit {
  private categories: string[];
  private selectedCategory: string;
  constructor() { }

  ngOnInit() {
    this.categories = [
      'temperature',
      'humidity',
      'switch'
    ]
  }

  categoryChanged(value) {
    this.selectedCategory = value;
    console.log("Selected: ", value);
  }

}
