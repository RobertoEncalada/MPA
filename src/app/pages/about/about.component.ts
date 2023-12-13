import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { Netflix } from '../../interfaces/netflix';
import { NetflixService } from '../../providers/netflix.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers: [NetflixService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public data : Netflix[] = [];
  constructor(private dataProvider: NetflixService) { }
  titleAbout = 'Acerca de Netflix';

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Netflix[]); 
      this.data = dataArray.slice(0,10);
    })
  }

  strTitle:string = "Creado por Usuarios, Para Usuarios: La Historia de Netflix"
  strInfo:string = 'Descubre la historia detrás de la plataforma que ha transformado la forma en que consumimos entretenimiento. Desde su fundación por Reed Hastings y Marc Randolph hasta su expansión global, exploraremos cómo Netflix ha mantenido su compromiso de ofrecer contenido diverso y
   de calidad.'
}
