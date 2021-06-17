import { ProductDetails } from './product-details';

describe('ProductDetails', () => {
  it('should create an instance', () => {
    expect(new ProductDetails('',0,'')).toBeTruthy();
  });
});
