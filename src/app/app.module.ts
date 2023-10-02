

import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SkltloaderComponent } from './skltloader/skltloader.component';
import { TestComponent } from './test/test.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PdfComponent } from './pdf/pdf.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {CdkDrag} from '@angular/cdk/drag-drop'

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ThemeComponent } from './theme/theme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatAdderessComponent } from './mat-adderess/mat-adderess.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { StarsComponent } from './stars/stars.component';
import { DragandDropComponent } from './dragand-drop/dragand-drop.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialsnackbarComponent } from './materialsnackbar/materialsnackbar.component'

import { FormsModule } from '@angular/forms';


import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  declarations: [
    AppComponent,
    SkltloaderComponent,
    PdfComponent,
    CarouselComponent,
    ThemeComponent,
    MaterialComponent,
    MatAdderessComponent,
    StarsComponent,
    TestComponent,
    DragandDropComponent,
    DatepickerComponent,
    MaterialNavComponent,
    MaterialsnackbarComponent,
  ],

  imports: [
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    CommonModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    CdkDrag,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
