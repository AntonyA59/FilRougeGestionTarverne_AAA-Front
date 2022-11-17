import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopIngredientDto } from 'src/app/interfaces/ingredient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private urlShopSell = environment.apiUrl + 'api/game/shop/ShopSelling';
  private urlShopBuy = environment.apiUrl + 'api/game/shop/ShopBying';
  constructor(private http: HttpClient) {}

  sellIngredients(shopIngredientDtoToSelling: ShopIngredientDto) {
    this.http.post(this.urlShopSell, shopIngredientDtoToSelling).subscribe();
  }

  buyIngredients(shopIngredientDtoToBuying: ShopIngredientDto) {
    this.http.post(this.urlShopBuy, shopIngredientDtoToBuying).subscribe();
  }
}
