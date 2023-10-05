import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { TranslateService } from '@ngx-translate/core';
import { IProgressIndicatorConfig } from 'ircc-ds-angular-component-library';
import { Subscription } from 'rxjs';
import { AccessbilityDemoFormStateService } from '../accessbility-demo-form-state.service';

@Component({
  selector: 'app-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.scss']
})
export class WorkInformationComponent implements OnInit {
  routerSub?: Subscription;
  progressIndicatorSub?: Subscription;
  progressIndicatorConfig: IProgressIndicatorConfig = {
    id: ''
  };
  altPathKey = '';
  altLangURL = '';

  nextHNConfig = {
    id: 'next_hidden_nav',
    skipLinks: [
      {
        title: 'Skip to main content',
        href: 'ds-cont'
      }
    ]
  };

  constructor(
    private router: Router,
    private formService: AccessbilityDemoFormStateService,
    private translate: TranslateService,
    private altLang: LanguageSwitchService
  ) { }

  ngOnInit() {
    this.altLang.setAltLangLink('WorkInfo');
    // this.lang.getAltLangLink().subscribe((altLang: string) => {
    //   this.altPathKey = altLang;
    //   this.setAltLangURL();
    //   console.log(this.altLangURL);
    // });

    this.formService.updateSelected(2);
    //if the page has moved to this one via a back or forward browser button, this detects the move and updates the page.
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tempConfig = this.progressIndicatorConfig;
        tempConfig.selected = 2;
        this.formService.updateProgressIndicator(tempConfig);
      }
    });

    this.progressIndicatorSub =
      this.formService.progressIndicatorObs$.subscribe((response) => {
        this.progressIndicatorConfig = response;
      });
  }

  progressTabButtonEvent(event: Event) {
    this.formService.progressTabButtonEvent(event);
  }

  /**
   * Getter for the previous page button
   */
  previousPage() {
    this.formService.navigationHandler('prev');

  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.progressIndicatorSub?.unsubscribe();
  }

}
