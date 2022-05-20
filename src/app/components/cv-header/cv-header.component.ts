import { Component, Input, OnInit } from '@angular/core';
import { CvHeader } from 'src/app/models/cvHeader.model';

@Component({
  selector: 'cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss']
})
export class CvHeaderComponent implements OnInit {

  @Input() headerDetails: CvHeader = {} as CvHeader;

  constructor() { }

  ngOnInit(): void {
  }

}
