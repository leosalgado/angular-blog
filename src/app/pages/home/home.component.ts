import { Component } from '@angular/core';
import { BlogTitleComponent } from '../../components/blog-title/blog-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  imports: [BlogTitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
