import { getClient } from './apollo-client';
import { GetBookMetadata } from './queries/book.graphql';
import { GetGenreMetadata } from './queries/genre.graphql';
import { GetAuthorMetadata } from './queries/author.graphql';
import { GetSeriesMetadata } from './queries/series.graphql';

export const TITLE_SUFFIX = ' - Cobulles, le 9e art partagé';

export async function getBookMetadata(slug) {
  const { data } = await getClient().query({ query: GetBookMetadata, variables: { slug } });
  return {
    title: data.books.data[0].attributes.Title + TITLE_SUFFIX,
    description: data.books.data[0].attributes.Description[0].children[0].text,
  };
}

export async function getAuthorMetadata(slug) {
  const { data } = await getClient().query({ query: GetAuthorMetadata, variables: { slug } });
  return {
    title: data.authors.data[0].attributes.Name + TITLE_SUFFIX,
    description: data.authors.data[0].attributes.Bio[0].children[0].text,
  };
}

export async function getSeriesMetadata(slug) {
  const { data } = await getClient().query({ query: GetSeriesMetadata, variables: { slug } });
  return {
    title: data.series.data[0].attributes.Name + TITLE_SUFFIX,
    description: data.series.data[0].attributes.Description[0].children[0].text,
  };
}

export async function getGenreMetadata(slug) {
  const { data } = await getClient().query({ query: GetGenreMetadata, variables: { slug } });
  return {
    title: data.genres.data[0].attributes.Title + TITLE_SUFFIX,
    description: data.genres.data[0].attributes.Title,
  };
}
