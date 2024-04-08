export function transformBook(data) {
  return data
    ? {
        id: data.book.data.id,
        name: data.book.data.attributes.Title,
        scriptWriters: transformAuthors(data.book.data.attributes.ScriptWriters),
        artists: transformAuthors(data.book.data.attributes.Artists),
        series: {
          id: data.book.data.attributes.Series.data.id,
          name: data.book.data.attributes.Series.data.attributes.Name,
        },
        seriesVolume: data.book.data.attributes.SeriesVolume,
        type: data.book.data.attributes.Type,
        genre: data.book.data.attributes.Genre.data.attributes.Title,
        images: data.book.data.attributes.Images.data.map((item) => ({
          ...item.attributes,
        })),
        ageGroup: data.book.data.attributes.AgeGroup,
        pageCount: data.book.data.attributes.PageCount,
        publicationYear: data.book.data.attributes.PublicationYear,
        isbn10: data.book.data.attributes.ISBN10,
        isbn13: data.book.data.attributes.ISBN13,
        description: data.book.data.attributes.Description,
      }
    : null;
}

export function transformSerie(data) {
  return data
    ? {
        id: data.serie.data.id,
        name: data.serie.data.attributes.Name,
        ended: data.serie.data.attributes.Ended,
        firstPublicationYear: data.serie.data.attributes.FirstPublicationYear,
        creators: transformAuthors(data.serie.data.attributes.Creators),
        description: data.serie.data.attributes.Description,
      }
    : null;
}

function transformAuthors(data) {
  return data
    ? data.data.map((author) => ({
        id: author.id,
        name: author.attributes.Name,
      }))
    : [];
}
