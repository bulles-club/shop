export function transformBook(book) {
  return book
    ? {
        id: book.id,
        name: book.attributes.Title,
        slug: book.attributes.Slug,
        scriptWriters: transformAuthors(book.attributes.ScriptWriters),
        artists: transformAuthors(book.attributes.Artists),
        series: transformSerie(book.attributes.Series?.data),
        seriesVolume: book.attributes.SeriesVolume,
        type: book.attributes.Type,
        genre: book.attributes.Genre?.data.attributes.Title,
        images: book.attributes.Images.data.map((item) => ({
          ...item.attributes,
        })),
        coverUrl: book.attributes.Images.data[0].attributes.url,
        ageGroup: book.attributes.AgeGroup,
        pageCount: book.attributes.PageCount,
        publicationYear: book.attributes.PublicationYear,
        isbn10: book.attributes.ISBN10,
        isbn13: book.attributes.ISBN13,
        description: book.attributes.Description,
      }
    : null;
}

export function transformSerie(serie) {
  return serie
    ? {
        id: serie.id,
        name: serie.attributes.Name,
        slug: serie.attributes.Slug,
        ended: serie.attributes.Ended,
        firstPublicationYear: serie.attributes.FirstPublicationYear,
        creators: transformAuthors(serie.attributes.Creators),
        description: serie.attributes.Description,
        books: serie.attributes.Books?.data.map((book) => transformBook(book)),
      }
    : null;
}

function transformAuthors(data) {
  return data ? data.data.map((author) => transformAuthor(author)) : [];
}

export function transformAuthor(author) {
  return author
    ? {
        id: author.id,
        name: author.attributes.Name,
        slug: author.attributes.Slug,
        bio: author.attributes.Bio,
        photoUrl: author.attributes.Photo?.data.attributes.url,
        series: author.attributes.series?.data.map((serie) => transformSerie(serie)),
      }
    : [];
}
