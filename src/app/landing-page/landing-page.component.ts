import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let path = this.route.snapshot.url[0]?.path
    document.getElementById(path)?.scrollIntoView()
  }
}
