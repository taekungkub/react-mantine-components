export interface ProductTy {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: Array<string>
}

export interface UserTy {
  id: number
  user_email: string
  user_password: string
  user_displayname: string
  user_tel: string
  is_verify: false
  reset_password_token: string
  user_created: string
  user_updated: string
  role_id: number
  user_id: number
  role_title: string
}
