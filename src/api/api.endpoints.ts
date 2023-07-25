enum Endpoints{
 Auth = 'auth',
 Category = 'category',
 Orders = 'orders',
 Users = 'users',
 Statistic = 'statistic',
 Reviews = 'reviews',
 Products = 'products'
}

const api = {
 auth: {
  sign: `/${Endpoints.Auth}/`,
  refreshToken: `/${Endpoints.Auth}/login/refresh`,
  logout: `/${Endpoints.Auth}/logout`,
  checkAuth: `/${Endpoints.Auth}/check_auth`
 },
 category: {
  all: `/${Endpoints.Category}/`,
  create: `/${Endpoints.Category}/create`,
  update: `/${Endpoints.Category}/update/`,
  delete: `/${Endpoints.Category}/delete/`,
 },
 orders: {
 all:`/${Endpoints.Orders}`
 },
 users: {
  profile: `/${Endpoints.Users}/profile`,
  update: `/${Endpoints.Users}/profile/update`,
  favorites: `/${Endpoints.Users}/profile/favorites/`
 },
 statistic: {
  all: `/${Endpoints.Statistic}/admin`
 },
 reviews: {
  all: `/${Endpoints.Reviews}/`,
  create: `/${Endpoints.Reviews}/create/`,
  update: `/${Endpoints.Reviews}/update/`,
  average: `/${Endpoints.Reviews}/average/`
 },
 products: {
  all: `/${Endpoints.Products}/`,
  category: `/${Endpoints.Products}/by_category/`,
  similar: `/${Endpoints.Products}/similar/`,
  create: `/${Endpoints.Products}/create`,
  delete: `/${Endpoints.Products}/delete/`,
  update: `/${Endpoints.Products}/update/`
 }
}

export const{auth, category, products, orders, users, reviews, statistic}= api