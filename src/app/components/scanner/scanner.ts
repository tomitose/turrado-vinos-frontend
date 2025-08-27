import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';


@Component({
  selector: 'app-scanner',
  standalone: false,
  templateUrl: './scanner.html',
  styleUrl: './scanner.css'
})
export class Scanner {
 // Esta variable controla si se muestra o no la vista de la cámara.
 scannerActivado = true;
  
  // 3. DEFINIMOS LOS FORMATOS PERMITIDOS
  allowedFormats = [ BarcodeFormat.QR_CODE ];
  
  constructor(private readonly router: Router) { }

  onPermisoRespuesta(permitido: boolean): void {
    if (!permitido) {
      this.scannerActivado = false;
      alert("Para escanear, necesitamos acceso a la cámara. Por favor, recarga la página y acepta el permiso.");
    }
  }

  onScanExitoso(url: string): void {
    if (this.scannerActivado) {
      console.log('QR Escaneado:', url);
      
      try {
        const ruta = new URL(url).pathname;
        this.scannerActivado = false;
        this.router.navigate([ruta]);
      } catch (error) {
        console.error("El código QR no contiene una URL válida.", error);
        alert("El código QR no es válido.");
      }
    }
  }
}