import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { LeerJsonService } from '../../../servicios/leer-json.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  rutaImg:string = '';
  contenidoJSON:any = [];
  //jsonURL:string = '../../../assets/json/educacion.json';
  //jsonURL:string = 'http://localhost:8080/ver/educaciones';
  //jsonURL:string = 'https://registered-jenn-blanche-a.koyeb.app/ver/educaciones';
  jsonURL:string = 'https://backend-app-i6ew.onrender.com/ver/educaciones';

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
