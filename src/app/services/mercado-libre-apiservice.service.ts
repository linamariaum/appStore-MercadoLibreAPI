import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercadoLibreApiserviceService {
  sitioURL = 'https://api.mercadolibre.com/sites/MCO/';
  itemURL = 'https://api.mercadolibre.com/items/';

  constructor(private http: HttpClient) { }

  public get_Articulos(param: string, offset: string){
    return this.http.get<any>(this.sitioURL + 'search?q=' + param + `&offset=${offset}&limit=50`);

    // this.http.get(this.sitioURL + 'search?q=' + param + `&offset=${offset}&limit=50`)
     // .subscribe(data => {   // data is already a JSON object
      //  console.log(data);
      // });
  }
}
