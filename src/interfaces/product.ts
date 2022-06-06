export interface IProduct {
  id: string
  name: string
  category: string
  price: number
  img: string
}

export interface IProductCreate {
  name: string
  category: string
  price: number
  img: string
}

export interface IProductId {
  id: string
}
