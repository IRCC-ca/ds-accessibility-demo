import { Component, OnInit } from '@angular/core';
import { IButtonConfig } from 'ircc-ds-angular-component-library';

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

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    
  }

}
