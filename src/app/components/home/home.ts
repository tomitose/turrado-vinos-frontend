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

  vinoDestacado: any = null;
  vinosDestacados: any[] = [];
  strapiUrl = environment.strapiUrl;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getVinoDestacado().subscribe(vino => {
      this.vinoDestacado = vino;
      
      this.dataService.getVinos().subscribe(todosLosVinos => {
        
        const vinosFiltrados = todosLosVinos.filter(
          v => v.documentId !== this.vinoDestacado?.documentId
        );
                this.vinosDestacados = vinosFiltrados.slice(0, 4);
      });
    });
  }

}