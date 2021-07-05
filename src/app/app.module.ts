import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { SectionCardsModule } from './components/section-card/section-card.module';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, SectionCardsModule],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
