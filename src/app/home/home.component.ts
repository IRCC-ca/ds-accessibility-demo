import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = false;

  outstandingWork = [
    "Translate (multi-file solution) - Get Anthony and Marcel to talk about this one",
    "Update Component Library",
    "Add scaffolding for error messages under components so that it's ready for use on CL update"]

  constructor(private altLang: LanguageSwitchService) { }

  ngOnInit() {
    this.altLang.setAltLangLink('Home-alt');
  }



}
