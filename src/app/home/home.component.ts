import { Component, OnInit } from '@angular/core';
import { MercadoLibreApiserviceService } from '../services/mercado-libre-apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public articulos: Array<any> = [];
  public imgPath: string;
  public message: boolean;

  constructor(public mercadoLibreAPIServiceService: MercadoLibreApiserviceService) {
    this.imgPath = '../../../assets/banner-mercadolibre.jpg';
   }

  ngOnInit() {
    this.message = false;
   }

  onEnter(value: string) {
    console.log('Enter...' + value);
  }

  onClick(value: string) {
    console.log('Click...' + value);
  }

  buscar(value: string) {
    this.mercadoLibreAPIServiceService.get_Articulos(value, '0').subscribe(
      data => {
        this.articulos = data.results;
        // console.log(data);
        this.articulos.forEach(
          articulo => {
            articulo.price = this.formatPrice(articulo.price);
          }
        );
        // console.log('paso');
      },
      error => {
        console.log('Error al recuperar los articulos.');
        this.message = true;
      }
    );
  }

  // tslint:disable-next-line: ban-types
  formatPrice(cost: Number): String {
    let end = '';
    const price = cost.toString();
    if (price.length > 3 && price.length <= 6) {
      const length = price.length - 3;
      const initial = price.substring(0, length);
      end = initial + '.' + price.substring(length, price.length);
    } else if (price.length > 6) {
      const length = price.length - 3;
      let initial = price.substring(0, length);
      if (initial.length > 3) {
        const length2 = initial.length - 3;
        const initial2 = initial.substring(0, length2);
        initial = initial2 + "'" + price.substring(length, price.length);
      }
      end = initial + '.' + price.substring(length, price.length);
    }
    return end;
  }

}
