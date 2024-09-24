import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule],
  template: `
    <!--header-->
    <div class="navbar">
      <!--logo-->
      <div class="navbar-brand">
        <a class="navbar-item"> </a>
      </div>
    </div>

    <router-outlet></router-outlet>


    <!--footer-->
    <footer>
      <p>Copyright &copy; {{ title }}. All rights reserved.</p>
    </footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "SearchApp";
}
