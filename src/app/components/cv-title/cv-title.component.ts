import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'cv-title',
  templateUrl: './cv-title.component.html',
  styleUrls: ['./cv-title.component.scss']
})
export class CvTitleComponent implements OnInit {

  @Input() title = '';

  constructor(public uiService: UiService) { }

  ngOnInit(): void {
  }

}
