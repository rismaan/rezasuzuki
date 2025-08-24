
export interface CarVariant {
  name: string;
  price: number;
}

export interface CarModel {
  modelName: string;
  variants: CarVariant[];
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  carModel: string;
  imageUrl: string;
}
