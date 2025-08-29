import { Component,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { DataService } from '../../services/data';


@Component({
  selector: 'app-scanner',
  standalone: false,
  templateUrl: './scanner.html',
  styleUrl: './scanner.css'
})
export class Scanner {

  @ViewChild('scanner') scanner!: ZXingScannerComponent;

  scannerActivado = true;
  capturando = false;
  
  constructor(
    private readonly router: Router,
    private readonly dataService: DataService 
  ) {}

  onPermisoRespuesta(permitido: boolean): void {
    if (!permitido) {
      this.scannerActivado = false;
      alert("Para identificar vinos, necesitamos acceso a la cámara.");
    }
  }

  capturarImagen(): void {
    this.capturando = true;

    // --- LA CORRECCIÓN ESTÁ AQUÍ ---
    // Accedemos al elemento <video> directamente a través de la referencia del scanner.
    const videoElement = (this.scanner as any).previewElemRef.nativeElement;

    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext('2d')?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    
    const imageBase64 = canvas.toDataURL('image/jpeg', 0.8);
    // --- FIN DE LA CORRECCIÓN ---

    this.dataService.identificarVinoPorImagen(imageBase64).subscribe({
      next: (response: any) => {
        console.log('Vinos encontrados:', response.matches);
        this.capturando = false;

        if (response.matches && response.matches.length > 0) {
          if (response.matches.length === 1) {
            const vinoEncontrado = response.matches[0];
            this.router.navigate(['/vinos', vinoEncontrado.documentId]);
          } else {
            alert('Se encontraron varios vinos parecidos. ¡Prueba con una foto más clara!');
          }
        } else {
          alert('No pudimos identificar el vino en nuestra base de datos.');
        }
      },
      error: (err: any) => {
        console.error('Error en la identificación:', err);
        this.capturando = false;
        alert('Ocurrió un error al intentar identificar el vino.');
      }
    });
  }
}