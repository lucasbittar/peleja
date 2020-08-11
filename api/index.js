import { createClient } from 'contentful';

import { SPACE_ID, ACCESS_TOKEN } from './constants'

const api = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

export default api;
