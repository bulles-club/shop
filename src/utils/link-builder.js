import { paths } from 'src/routes/paths';

export const buildLinkBook = (slug) => `${paths.library.book}/${slug}`;
export const buildLinkAuthor = (slug) => `${paths.library.author}/${slug}`;
export const buildLinkSeries = (slug) => `${paths.library.series}/${slug}`;