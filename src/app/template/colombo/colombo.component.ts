import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-colombo',
  templateUrl: './colombo.component.html',
  styleUrls: ['./colombo.component.scss']
})
export class ColomboComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
