import { getClient } from './apollo-client';
import { GetBookMetadata } from './queries/book.graphql';
import { GetAuthorMetadata } from './queries/author.graphql';
import { GetSeriesMetadata } from './queries/series.graphql';

export async function getBookMetadata(slug) {
  const { data } = await getClient().query({ query: GetBookMetadata, variables: { slug } });
  return {
    title: data.books.data[0].attributes.Title,
    description: data.books.data[0].attributes.Description[0].children[0].text,
  };
}

export async function getAuthorMetadata(slug) {
  const { data } = await getClient().query({ query: GetAuthorMetadata, variables: { slug } });
  console.log(data);
  return {
    title: data.authors.data[0].attributes.Name,
    description: data.authors.data[0].attributes.Bio[0].children[0].text,
  };
}

export async function getSeriesMetadata(slug) {
  const { data } = await getClient().query({ query: GetSeriesMetadata, variables: { slug } });
  console.log(data);
  return {
    title: data.series.data[0].attributes.Name,
    description: data.series.data[0].attributes.Description[0].children[0].text,
  };
}
