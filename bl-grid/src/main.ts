import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cVGhNYVZpR2Nbe051flFPal1QVAciSV9jS3pTdUVrWXxddHdRT2JYUA==');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
