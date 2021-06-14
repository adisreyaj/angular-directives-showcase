import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SECTIONS } from 'src/app/config/sections.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  sections = SECTIONS;
  constructor() {}

  ngOnInit(): void {}
}
