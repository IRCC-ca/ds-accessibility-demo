import { Component, OnInit } from '@angular/core';
import { IButtonConfig } from 'ircc-ds-angular-component-library';
import { Router } from '@angular/router';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  continueButtonConfig: IButtonConfig = {
    id: 'continue-btn',
    size: 'large',
  };

  constructor(private router: Router,
    private translate: TranslateService,
    private altLang: LanguageSwitchService,) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigateByUrl(this.getMainPageLink);
  }

  get getMainPageLink() {
    const curLang = this.translate.currentLang;
    this.translate.use((curLang === 'en-US') || (curLang === 'en') ? 'en-US' : 'fr-FR');
    const lang = ((curLang === 'en-US') || (curLang === 'en') ? 'en' : 'fr');
    // return ''
    return ('/' + lang + '/' + this.translate.instant('ROUTES.PersonalInfo'));
  }

}
