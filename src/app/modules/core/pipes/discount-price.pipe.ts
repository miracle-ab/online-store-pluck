import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetailinterface } from 'src/app/core/interfaces/product-detail.interface';

@Pipe({
  name: 'discountPrice',
})
export class DiscountPricePipe implements PipeTransform {
  transform(product: ProductDetailinterface | null): number | undefined {
    if (product?.discount?.percent) {
      const priceWithDiscount =
        product.price * ((100 - product.discount.percent) / 100);
      return priceWithDiscount;
    }
    if (product?.discount?.exact) {
      const priceWithExact = product.price - product.discount.exact;
      return priceWithExact;
    }
    return product?.price;
  }
}
