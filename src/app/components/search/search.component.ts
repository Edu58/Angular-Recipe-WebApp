import { Component, OnInit} from '@angular/core';
import { GetsearchService } from 'src/app/services/getsearch.service';
import { GetbyidService } from 'src/app/services/getbyid.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userInput: any;
  data: any = [];

  constructor(private searchUserInput: GetsearchService, private response: GetsearchService, private getInfoById: GetbyidService) {}

  ngOnInit(): void {
  }
  
  searchInput() {
    this.response.getResponse(this.userInput).subscribe(
      result => {
        this.data = result.meals
      }
    )
  }
}