import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SkltloaderComponent } from './skltloader/skltloader.component';
import { TestComponent } from './test/test.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PdfComponent } from './pdf/pdf.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ThemeComponent } from './theme/theme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatAdderessComponent } from './mat-adderess/mat-adderess.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

@NgModule({
  declarations: [
    AppComponent,
    SkltloaderComponent,
    TestComponent,
    PdfComponent,
    CarouselComponent,
    ThemeComponent,
    MaterialComponent,
    MatAdderessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    CommonModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
