import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import '@angular/compiler'; // Importación necesaria para el compilador JIT


platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
