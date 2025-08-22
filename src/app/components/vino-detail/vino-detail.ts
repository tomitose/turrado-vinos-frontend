import { Component,OnInit  } from '@angular/core';
import { DataService } from '../../services/data';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-vino-detail',
  standalone: false,
  templateUrl: './vino-detail.html',
  styleUrl: './vino-detail.css'
})
export class VinoDetail implements OnInit {

  vino: any = null;
  loading = true;
  // strapiUrl = 'http://localhost:1337';
  strapiUrl = environment.strapiUrl;


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // ----> PUNTO DE CONTROL 1: ¿Estamos leyendo el ID de la URL?
    const docId = this.route.snapshot.paramMap.get('documentId');
    console.log('Paso 1: ID leído de la URL:', docId);

    if (docId) {
      this.dataService.getVinoByDocId(docId).subscribe(vinoData => {
        
        // ----> PUNTO DE CONTROL 2: ¿Qué nos devuelve el servicio?
        console.log('Paso 2: Datos recibidos del servicio:', vinoData);

        this.vino = vinoData;
        this.loading = false;

        // ----> PUNTO DE CONTROL 3: ¿Cómo queda el estado del componente?
        console.log('Paso 3: Estado final del componente. Vino:', this.vino, 'Loading:', this.loading);
      });
    } else {
        console.error('ERROR: No se encontró ningún documentId en la URL.');
        this.loading = false;
    }
  }
}