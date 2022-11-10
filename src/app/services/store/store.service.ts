import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopIngredientDto } from 'src/app/interfaces/ingredient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
    }),
  };
  private urlShop = environment.apiUrl + 'api/game/shop/';
  constructor(private http: HttpClient) {}

  sellIngredients(shopIngredientDtoToSelling: ShopIngredientDto) {
    this.urlShop += 'ShopSelling';
    this.http
      .post(this.urlShop, shopIngredientDtoToSelling, this.httpOptions)
      .subscribe((response) => {});
  }

  buyIngredients(shopIngredientDtoToBuying: ShopIngredientDto) {
    this.urlShop += 'ShopBying';
  }
}
