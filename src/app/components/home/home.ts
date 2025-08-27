import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { environment } from '../../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  vinosRecomendados: any = [];
  vinosDestacados: any[] = [];
  
  todosLosVinos: any[] = [];
  resultadosBusqueda: any[] = [];
  terminoBusqueda: string = '';

  strapiUrl = environment.strapiUrl;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getVinosRecomendados().subscribe(vinos => {
      this.vinosRecomendados = vinos;
    });

    // Pedimos los vinos DESTACADOS para el carrusel
    this.dataService.getVinosDestacados().subscribe(vinos => {
      this.vinosDestacados = vinos;
    });

    // Pedimos TODOS los vinos para la lógica del buscador
    this.dataService.getVinos().subscribe(todosLosVinos => {
      this.todosLosVinos = todosLosVinos;
    });
  }

  buscarVinos(): void {
    const busqueda = this.terminoBusqueda.toLowerCase().trim();
    
    if (!busqueda) {
      this.resultadosBusqueda = [];
      return;
    }

    this.resultadosBusqueda = this.todosLosVinos.filter(vino => {
      const nombre = (vino.nombre || '').toLowerCase();
      const cepa = (vino.cepa || '').toLowerCase();
      return nombre.includes(busqueda) || cepa.includes(busqueda);
    });
  }
}