import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  images: any[] = [
    {
      url: 'assets/imgs/border0.jpg',
      titulo: 'Primera Imagen',
      subtitulo: '2 meses y medio'
    },
    {
      url: 'assets/imgs/border1.jpg',
      titulo: 'Segunda Imagen',
      subtitulo: '4 meses y medio'
    },
    {
      url: 'assets/imgs/border2.jpg',
      titulo: 'Tercera Imagen',
      subtitulo: '2 años y medio'
    },
    {
      url: 'assets/imgs/border3.jpg',
      titulo: 'Cuarta Imagen',
      subtitulo: '4 años'
    }
  ];

}
