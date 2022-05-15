import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('content', { static: false }) elem!: ElementRef;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {

  }

  // download pdf using jspdf - aruna
  onDownload() {
    console.log(this.elem.nativeElement)
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.elem.nativeElement, {
      callback: (pdf) => {
        pdf.save('CV.pdf');
      }
    })

  }

}
