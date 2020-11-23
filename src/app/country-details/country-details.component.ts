import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SearchService) { }

  country: {};

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      let name = this.route.snapshot.queryParamMap.get('name')

      if (name) {

        this.service.getCountry(name)
          .subscribe(country => {
            this.country = country
            console.log(country)
          })
      }
    });

  }
}
