import algoliasearch from 'algoliasearch/lite';

import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from 'src/config-global';

// ----------------------------------------------------------------------

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

// ----------------------------------------------------------------------

export function useSearchClient() {
  return searchClient;
}
