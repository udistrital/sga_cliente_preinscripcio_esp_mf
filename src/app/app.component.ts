import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent } from 'rxjs';
import { getCookie } from '../utils/cookie';


@Component({
  selector: 'sga-preinscripciones-mf',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sga-cliente-preinscripciones-mf';
  whatLang$ = fromEvent(window, 'lang');

  ngOnInit(): void {
    this.validateLang();
  }

  constructor(
    private translate: TranslateService
  ) { }

  validateLang() {
    let lang = getCookie('lang') || 'es';
    this.whatLang$.subscribe((x: any) => {
      lang = x['detail']['answer'];
      this.translate.setDefaultLang(lang)
    });
    this.translate.setDefaultLang(getCookie('lang') || 'es');
  }
}