import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { SectionCardsModule } from './components/section-card/section-card.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, SectionCardsModule],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
