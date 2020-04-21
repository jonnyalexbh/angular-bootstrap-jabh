import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-testing',
  templateUrl: './sample-testing.component.html',
  styleUrls: ['./sample-testing.component.scss']
})
export class SampleTestingComponent implements OnInit {

  title = 'sample testing works!';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHome() {
    this.router.navigate(['home']);
  }

}
