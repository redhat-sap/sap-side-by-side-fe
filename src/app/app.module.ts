import { NgModule, APP_INITIALIZER } from '@angular/core';

import { CoreModule, ConfigurationService } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigurationService) => () => configService.loadConfiguration().toPromise(),
      deps: [ConfigurationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
