import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-head',
  standalone: true,
  imports: [],
  templateUrl: './category-head.component.html',
  styleUrl: './category-head.component.scss',
})
export class CategoryHeadComponent {
  @Input() head: any;
}
