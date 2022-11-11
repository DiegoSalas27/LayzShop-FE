export interface IProduct {
  product_id?: number
  category_id?: number
  name?: string
  product_slug?: string
  brand?: string
  model?: string
  description?: string
  manufacturer?: string
  thumbnail_image?: string
  rating?: number
  price?: number
}

export interface IProducts {
  products: IProduct[]
}