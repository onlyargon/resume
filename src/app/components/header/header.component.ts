import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    template: ['kandy', Validators.required]
  });

  constructor(public uiService: UiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form.get('template')?.valueChanges.subscribe(value => {
      this.uiService.template = value;
    });
  }

}
