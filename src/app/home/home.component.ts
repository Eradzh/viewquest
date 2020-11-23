import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  searchStr: string = ''
  isLoaded: boolean = false
  country: any
  timer: any

  constructor(private service: SearchService) { }

  handleChange() {

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.service.getCountryList(this.searchStr)
        .subscribe(country => {
          this.country = country
          this.isLoaded = true
        })
    }, 1000);

  }

}
