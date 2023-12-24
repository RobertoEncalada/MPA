import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

interface ImgOver {
  imgSrc: string;
  altText: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-portfolio-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-overview.component.html',
  styleUrl: './portfolio-overview.component.css'
})
export class PortfolioOverviewComponent {
  constructor(private titleService: Title) { }
  poTittle = 'Netflix tiene algo para todos';
  subTittle= 'Descubre un mundo de entretenimiento sin límites con Netflix';
  tnet= 'Tu próxima gran aventura comienza aquí, en Netflix.';
  btnNetflix = 'Unirte a Netflix';
  ngOnInit() {
      this.titleService.setTitle('Portafolio-Overview');
  }
  imgOvers: ImgOver[] = [
    {
      imgSrc: 'assets/img/admiperfiles.jpg',
      altText: 'Administrar Perfiles',
      title: 'Administrar Perfiles',
      link: 'https://help.netflix.com/es/node/10421'
    },
    {
      imgSrc: 'assets/img/perfilNinos.jpg',
      altText: 'Perfiles Niños',
      title: 'Perfiles Niños',
      link: 'https://help.netflix.com/es/node/114275'
    },
    {
      imgSrc: 'assets/img/disposi4.jpg',
      altText: 'Dispositivos Compatibles',
      title: 'Dispositivos Compatibles',
      link: 'https://help.netflix.com/es/node/14361'
    },
    {
      imgSrc: 'assets/img/categoria.jpg',
      altText: 'Varias Categorias',
      title: 'Varias Categorias',
      link: 'https://help.netflix.com/es/node/2064'
    }
  ];
}
