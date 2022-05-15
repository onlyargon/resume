import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/models/detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() detail = {} as Detail;
  constructor() { }

  ngOnInit(): void {
  }

}
