import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() locationList: HousingLocation[] = [];

  results: HousingLocation[] = [];

  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter((location: HousingLocation) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
