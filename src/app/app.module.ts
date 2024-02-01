import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductComponent } from './components/common/product/product.component';
import { TitleComponent } from './components/common/title/title.component';
import { CoolInputDirective } from './directives/cool-input.directive';
import { IsChickenDirective } from './directives/is-chicken.directive';
import { ChickenDescriptionPipe } from './pipes/chicken-description.pipe';
import { WordUpperPipe } from './pipes/word-upper.pipe';
import { ChickenProductsPipe } from './pipes/chicken-products.pipe';
import {ProductService} from "./services/product.service";
import { MainComponent } from './components/pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    ChickenProductsPipe,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
