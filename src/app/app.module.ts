import { MessageComponent } from './message.component';
import { AppComponentService } from './app.component.service';

//import { AppComponentService } from './so-common-app-test/app.component.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

//import { SoCommonServiceModule } from '../../so-common-app/src/app/services/so-common-service.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns'

import { NgJsonEditorModule } from 'ang-jsoneditor';
import { TileComponent } from "./tile.component";
import { KendoGridComponent } from "./kendogrid.component";
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from "@progress/kendo-angular-buttons";
//import { ButtonModule } from '@progress/kendo-angular-grid';
@NgModule({
  declarations: [AppComponent,MessageComponent,TileComponent,KendoGridComponent],
  imports: [
    
    BrowserModule, HttpClientModule,
    GridModule,
   FormsModule,
   ButtonModule,
  
    NgJsonEditorModule,
     BrowserAnimationsModule,
    DropDownsModule
  ],
  providers: [

    AppComponentService
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent,TileComponent,KendoGridComponent]
})
export class AppModule {}
