import Cookies from 'js-cookie';

/**
 * Function to store access and refresh tokens in cookies.
 * @param accessToken - The access token to be stored.
 * @param refreshToken - The refresh token to be stored.
 */
export const storeTokens = (accessToken: string, refreshToken: string) => {
  // Set the tokens in cookies
  Cookies.set('accessToken', accessToken, { expires: 7 }); // Expires in 7 days
  Cookies.set('refreshToken', refreshToken, { expires: 30 }); // Expires in 30 days
};

/**
 * Function to clear access and refresh tokens from cookies.
 */
export const clearTokens = () => {
  // Remove the tokens from cookies
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

/**
 * Retrieves access and refresh tokens from browser cookies.
 * @returns {{
*   accessToken?: string; // The access token retrieved from cookies (optional).
*   refreshToken?: string; // The refresh token retrieved from cookies (optional).
* }} An object containing the retrieved access and refresh tokens.
*/
export function getTokensFromCookies(): {
  accessToken?: string;
  refreshToken?: string;
} {
  // Retrieve tokens from cookies using js-cookie library
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  return { accessToken, refreshToken };
}

