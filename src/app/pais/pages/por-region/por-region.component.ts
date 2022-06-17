import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    
  ]
})
export class PorRegionComponent  {

  constructor(private paisService : PaisService) { }

  regiones     : string[] = ['EU','EFTA', 'CARICOM','PA','AU', 'EEU',
                             'AL', 'USAN', 'ASEAN','CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva : string = '';
  paises: Country[] = [];


  activarRegion( region: string ){
    if(region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises =[];
    this.paisService.getRegion(region).subscribe(region =>{
      this.paises = region;
   
    })

    
  }

  getClasesCss (region : string): string{
    return (region === this.regionActiva) 
            ? 'btn btn-primary' 
            : 'btn btn-outline-primary'
  }

}