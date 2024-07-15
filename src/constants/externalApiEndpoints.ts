// export const externalApiEndpoints = {
//   base: 'https://jp-dev.cityremit.global/web-api/',
//   auth: {
//     login: 'config/v1/auth/login',
//   },
//   admin: {
//     transactionManager: 'transaction-manager/v1/admin/dashboard/search'
//   }
// }


export const externalApiEndpoints = {
  baseUrl: 'http://localhost:8080/api/v1',
  auth: {
    login: '/auth/login',
    logout: '/auth/logout'
  },
  admin: {
    transactions: 'transactions'
  }
}
