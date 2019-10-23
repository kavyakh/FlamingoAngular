import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/booking']);
  }
}
