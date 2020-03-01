import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.scss']
})
export class InternationalizationComponent implements OnInit {

  title: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('main.title').subscribe((res: any) => {
      this.title = res;
    });
  }

}
