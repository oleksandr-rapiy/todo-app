import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "To-do app";
  showForm: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router) {

    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showForm = value;
    });
  }

  ngOnInit(): void {

  }


  toggleForm() {
    this.uiService.toggleForm();
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
