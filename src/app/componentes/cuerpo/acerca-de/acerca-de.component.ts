import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { LeerJsonService } from '../../../servicios/leer-json.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  rutaImg:string = '';
  contenidoJSON:any = [];
  //jsonURL:string = 'http://localhost:8080/ver/personas';
  jsonURL:string = 'https://registered-jenn-blanche-a.koyeb.app/ver/personas';
  
  constructor(
    private componenteprincipal:AppComponent,
    private _servicio:LeerJsonService
  ) {
    this.rutaImg = this.componenteprincipal.ruta_imagenes;
    this._servicio.getJSON(this.jsonURL).subscribe(data => {
      this.contenidoJSON = data;
      //console.log(this.contenidoJSON);
    });
  }
  
  ngOnInit(): void {
  }

}
