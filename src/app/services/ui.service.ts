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

  onThemeChange() {
    this.isdark = !this.isdark;
  }
}
