import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public isdark: boolean = true;
  //TODO
  //   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  //     const newColorScheme = event.matches ? "dark" : "light";
  // });

  public template: string = 'kandy';

  onThemeChange() {
    this.isdark = !this.isdark;
  }
}
