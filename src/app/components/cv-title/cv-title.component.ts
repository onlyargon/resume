import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-title',
  templateUrl: './cv-title.component.html',
  styleUrls: ['./cv-title.component.scss']
})
export class CvTitleComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
