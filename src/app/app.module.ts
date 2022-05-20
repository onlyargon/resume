import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    HeaderComponent,
    SkillComponent,
    DetailComponent,
    TitleComponent,
    FooterComponent,
    SafeUrlPipe,
    SwitchToggleComponent,
    CvTitleComponent,
    CvHeaderComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgToggleModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
