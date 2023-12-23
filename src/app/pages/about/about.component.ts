import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { Netflix } from '../../interfaces/netflix';
import { NetflixService } from '../../providers/netflix.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers: [NetflixService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public data : Netflix[] = [];
  public filteredData: Netflix[] = [];
  public filterType: string = 'all'; // In

  constructor(private dataProvider: NetflixService, private titleService: Title) { }
  title = 'mpa';
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Netflix[]); 
      this.data = dataArray.slice(0,25);
      this.filteredData = this.data;

      this.titleService.setTitle('Acerca de');
    })
  }

  applyFilter() {
    if (this.filterType === 'all') {
      // Si el tipo es 'all', muestra todos los datos
      this.filteredData = this.data;
    } else {
      // Filtra los datos por tipo
      this.filteredData = this.data.filter(item => item.type === this.filterType);
    }
  }
  
}
