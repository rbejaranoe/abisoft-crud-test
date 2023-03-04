import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlatosComponent} from './pages/platos/platos.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CalendarModule} from "primeng/calendar";
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    FileUploadModule,
    TableModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    FormsModule,
    ConfirmDialogModule,
    PanelModule,
    CalendarModule,
    InputSwitchModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
