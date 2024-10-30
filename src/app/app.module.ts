
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgHttpLoaderModule } from 'ng-http-loader';


import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { TreeTableModule } from 'primeng/treetable';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ExecutionOrderComponent } from './execution-order/execution-order.component';
import { SearchPipe } from './pipes/search.pipe';
import { ServiceInvoiceComponent } from './service-invoice/service-invoice.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    ExecutionOrderComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    AlertComponent,
    ServiceInvoiceComponent,

  ],
  imports: [
    FundamentalNgxCoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    DialogModule,
    ToolbarModule,
    InputTextareaModule,
    MessagesModule,
    ToastModule,
    StepsModule,
    AnimateModule,
    CardModule,
    ChipModule,
    ConfirmDialogModule,
    PaginatorModule,
    MultiSelectModule,
    CheckboxModule,
    FieldsetModule,
    TreeTableModule,
    NgHttpLoaderModule.forRoot(),
  ],
 providers: [
  provideClientHydration(),
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  MessageService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
