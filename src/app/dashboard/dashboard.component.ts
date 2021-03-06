import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Training Pîvotal';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigateByUrl('/dashboard/product');
  }
}
