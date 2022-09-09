import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    MainPageComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    MainPageComponent,
    ToolbarComponent
  ]
})
export class LayoutModule { }
