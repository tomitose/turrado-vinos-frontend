// src/app/components/vinos/vinos.component.ts
import { Component, OnInit  } from '@angular/core';
import { DataService } from '../../services/data';


@Component({
  selector: 'app-vinos',
  standalone: false,
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css']
})
export class VinosComponent implements OnInit {

  vinos: any[] = [];
  loading = true;

  constructor(private dataService: DataService) { }

ngOnInit(): void {
  this.dataService.getVinos().subscribe({
    next: (data) => {
      console.log('¡Datos recibidos correctamente!:', data);
      
      this.vinos = data; 
      
      this.loading = false; 
    },
    error: (err) => {
      console.error('Error fetching vinos:', err);
      this.loading = false;
    }
  });
}
}
