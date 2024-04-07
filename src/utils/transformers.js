export function transformBook(data) {
  return {
    id: data.book.data.id,
    name: data.book.data.attributes.Title,
    scriptWriters: data.book.data.attributes.ScriptWriters.data.map((item) => ({
      id: item.id,
      name: item.attributes.Name,
    })),
    artists: data.book.data.attributes.Artists.data.map((item) => ({
      id: item.id,
      name: item.attributes.Name,
    })),
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
  };
}
