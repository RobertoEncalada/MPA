import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  constructor(private titleService: Title) { }
  ptittle = 'Planes y precios';
  ngOnInit() {
      this.titleService.setTitle('Planes y Precios');
  }
}
