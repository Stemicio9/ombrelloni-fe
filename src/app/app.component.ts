import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ombrelloni-FE';

  showCart = false;

  pageTitle = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setupHeader(val);
        this.setupPageTitle();

      }
    });
  }

  setupHeader(val: any) {
      this.showCart =
      val.url.includes('menulist') ||
      val.url.includes('umbrellachoose') ||
      val.url.includes('checkout') ||
      val.url.includes('cart');


  }


  setupPageTitle(){
    let route: ActivatedRoute = this.router.routerState.root;
    let routeTitle = '';
    while (route!.firstChild) {
      route = route.firstChild;
    }
    if (route.snapshot.data['title']) {
      routeTitle = route!.snapshot.data['title'];
    }
    this.pageTitle = routeTitle;
  }


}
