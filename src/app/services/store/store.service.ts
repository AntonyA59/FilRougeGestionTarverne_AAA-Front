import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IngredientQuantity,
  ShopIngredientDto,
} from 'src/app/interfaces/ingredient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private urlShopSell = environment.apiUrl + 'api/game/shop/ShopSelling';
  private urlShopBuy = environment.apiUrl + 'api/game/shop/ShopBying';
  constructor(private http: HttpClient) {}

  sellIngredients(
    shopIngredientDtoToSelling: ShopIngredientDto
  ): Observable<IngredientQuantity[]> {
    return this.http.post<IngredientQuantity[]>(
      this.urlShopSell,
      shopIngredientDtoToSelling,
      this.httpOptions
    );
  }

  buyIngredients(
    shopIngredientDtoToBuying: ShopIngredientDto
  ): Observable<IngredientQuantity[]> {
    return this.http.post<IngredientQuantity[]>(
      this.urlShopBuy,
      shopIngredientDtoToBuying,
      this.httpOptions
    );
  }

  isInventory(obj: any): obj is IngredientQuantity[] {
    return 'name' in obj[0];
  }
}
