import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { TranslateService } from '@ngx-translate/core';
import { IProgressIndicatorConfig, IIconButtonComponentConfig } from 'ircc-ds-angular-component-library';
import { Subscription } from 'rxjs';
import { AccessbilityDemoFormStateService } from '../accessbility-demo-form-state.service';

@Component({
  selector: 'app-background-info',
  templateUrl: './background-info.component.html',
  styleUrls: ['./background-info.component.scss']
})
export class BackgroundInfoComponent implements OnInit {
  routerSub?: Subscription;
  progressIndicatorSub?: Subscription;
  progressIndicatorConfig: IProgressIndicatorConfig = {
    id: ''
  };

  prevHNConfig = {
    id: 'prev_hidden_nav',
    skipLinks: [
      {
        title: 'Skip to main content',
        href: 'ds-cont'
      }
    ]
  };

  altPathKey = '';
  altLangURL = '';

  innerWidth = 0;

  constructor(
    private router: Router,
    private formService: AccessbilityDemoFormStateService,
    private translate: TranslateService,
    private altLang: LanguageSwitchService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();
  }

  ngOnInit() {
    //Set orientation of the progress bar and get initial window width
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();

    this.altLang.setAltLangLink('BackgroundInfo');

    this.formService.updateSelected(0);
    //if the page has moved to this one via a back or forward browser button, this detects the move and updates the page.
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tempConfig = this.progressIndicatorConfig;
        tempConfig.selected = 0;
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

  nextPage() {
    this.formService.navigationHandler('next');
  }

  /**
   * Getter for the previous page button
   */
  previousPage() {
    this.formService.navigationHandler('prev');

  }

  /**
   * Update the orientation of the progress bar
   */
  updateProgressBarOrientation() {
    if (
      this.innerWidth < 980 &&
      (this.progressIndicatorConfig.orientation === 'horizontal' ||
        this.progressIndicatorConfig.orientation === undefined)
    ) {
      this.formService.updateOrientation('vertical');
    } else if (
      this.innerWidth > 980 &&
      (this.progressIndicatorConfig.orientation === 'vertical' ||
        this.progressIndicatorConfig.orientation === undefined)
    ) {
      this.formService.updateOrientation('horizontal');
    }
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.progressIndicatorSub?.unsubscribe();
  }

}
