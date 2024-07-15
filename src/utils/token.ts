import Cookies from 'js-cookie';

/**
 * Function to store access and refresh tokens in cookies.
 * @param accessToken - The access token to be stored.
 * @param refreshToken - The refresh token to be stored.
 */
const storeTokens = (accessToken: string, refreshToken: string) => {
  // Set the tokens in cookies
  Cookies.set('accessToken', accessToken, { expires: 7 }); // Expires in 7 days
  Cookies.set('refreshToken', refreshToken, { expires: 30 }); // Expires in 30 days
};

export default storeTokens;