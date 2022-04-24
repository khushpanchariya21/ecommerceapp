export interface IProductModel {
    product?: IProductDetail[];
  }
  export interface IProductDetail {
    _id?: string,
    title?: string,
    price?: number;
    category?: string,
    description?: string,
    image?: string,
  }