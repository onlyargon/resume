import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillComponent } from './components/skill/skill.component';
import { DetailComponent } from './components/detail/detail.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { SwitchToggleComponent } from './components/switch-toggle/switch-toggle.component';
import { CvTitleComponent } from './components/cv-title/cv-title.component';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { CvComponent } from './components/cv/cv.component';
import { NgToggleModule } from 'ng-toggle-button';
import { KandyComponent } from './template/kandy/kandy.component';
import { ColomboComponent } from './template/colombo/colombo.component';
import { ChipComponent } from './components/chip/chip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SkillComponent,
    DetailComponent,
    TitleComponent,
    FooterComponent,
    SafeUrlPipe,
    SwitchToggleComponent,
    CvTitleComponent,
    CvHeaderComponent,
    CvComponent,
    KandyComponent,
    ColomboComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToggleModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
