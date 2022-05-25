import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() skill = {} as Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
