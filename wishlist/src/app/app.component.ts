import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wishlist';
  items : WishItem[] = [
    // new WishItem('To lean angualar'),
    // new WishItem('get coffeee', true),
    // new WishItem('find grass',),

  ]
}
