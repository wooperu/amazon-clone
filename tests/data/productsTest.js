import {formatCurrency} from '../scripts/utils/money.js';
import '../../data/products.js';

describe('test suite: Product', () => {
  it('has correct properties and methods', () => {

    const product = new Product({
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  });

  expect(product.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
  expect(product.getPrice()).toEqual('$7.99');
  })
});