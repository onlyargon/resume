import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-kandy',
  templateUrl: './kandy.component.html',
  styleUrls: ['./kandy.component.scss']
})
export class KandyComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
