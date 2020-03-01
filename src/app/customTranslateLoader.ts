import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function CustomTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
