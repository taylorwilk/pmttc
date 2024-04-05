import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})
export class ResourcesComponent implements OnInit{
  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }
}
