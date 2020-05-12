import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { slideInAnimation } from './animation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Resume';

  routes = ["", "education", "work", "projects", "skills"]

  constructor(private route: ActivatedRoute, private router: Router) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  navigateBack() {
    let page = this.router.url.split('/')[1];
    console.log(page, "page")
    let indx = this.routes.indexOf(page);
    console.log(indx, "indx");
    if (indx > 0) {
      this.router.navigate([this.routes[indx - 1]])
    } else {
      this.router.navigate([this.routes[this.routes.length - 1]])
    }
  }

  navigateForward() {
    let page = this.router.url.split('/')[1];
    console.log(page, "page")
    let indx = this.routes.indexOf(page);
    console.log(indx, "indx");
    if (indx < this.routes.length - 1) {
      this.router.navigate([this.routes[indx + 1]])
    } else {
      this.router.navigate([this.routes[0]])
    }
  }
}
