import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuModalModule } from './lib/au-modal/au-modal.module';
import { AppComponent } from './app.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { AuLibModule } from './lib/au-lib.module';
import { TabsComponent } from './pages/tabs/tabs.component';
import { ModalsComponent } from './pages/modals/modals.component';
import { MasksComponent } from './pages/masks/masks.component';
import { AuMaskModule } from './lib/au-mask/au-mask.module';
import { AnimationsComponent } from './pages/animations/animations.component';


@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    TabsComponent,
    ModalsComponent,
    MasksComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuLibModule,
    AuModalModule.forRoot(),
    AuMaskModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
