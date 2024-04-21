import { paths } from 'src/routes/paths';

import { STRAPI_URL } from 'src/config-global';

export const buildUrlBookPage = (slug) => `${paths.library.book}/${slug}`;
export const buildUrlAuthorPage = (slug) => `${paths.library.author}/${slug}`;
export const buildUrlSeriesPage = (slug) => `${paths.library.series}/${slug}`;
export const buildUrlImage = (url) => `${STRAPI_URL}${url}`;
