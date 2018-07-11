import { Component } from '@angular/core';

import { KontaktPage } from '../Kontakt/Kontakt';
import { SpeisekartePage } from '../Speisekarte/Speisekarte';
import { HomePage } from '../Home/home';
import { AktionPage } from '../Aktion/Aktion';
import { GutscheinPage } from '../Gutschein/Gutschein';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SpeisekartePage;
  tab3Root = KontaktPage;
  tab4Root = AktionPage;
  tab5Root = GutscheinPage;


  constructor() {

  }
}
