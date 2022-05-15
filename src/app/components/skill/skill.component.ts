import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill = {} as Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
