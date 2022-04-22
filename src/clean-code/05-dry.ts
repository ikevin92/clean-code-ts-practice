type Size = '' | 'S' | 'L' | 'XL' | 'M';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0)
            throw new Error('name is empty');
          break;
        case 'number':
          if (<number>(<unknown>this[key]) <= 0)
            throw new Error('price is zero');
          break;
        default:
          throw new Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    // No Dry
    // if (this.name.length <= 0) throw new Error('name is empty');
    // if (this.price <= 0) throw new Error('price is zero');
    // if (this.size.length <= 0) throw new Error('size is empty');

    // Dry
    if (!this.isProductReady) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('blue large Pants');
  console.log(bluePants.toString());
})();
