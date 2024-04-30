'use client';

import PropTypes from 'prop-types';

import useGenre from 'src/hooks/use-genre';

import { SplashScreen } from 'src/components/loading-screen';

import BookView from '../books/books-view';

// ----------------------------------------------------------------------

export default function GenreView({ slug }) {
  console.log(slug);
  const { loading, genre } = useGenre(slug);
  console.log(genre);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BookView
      title={genre.title}
      showViewAndSortOptions
      facets={[
        { label: 'Age', name: 'ageGroup' },
        { label: 'Editeur', name: 'publisher' },
      ]}
      filters={`genre:${genre?.title}`}
    />
  );
}

GenreView.propTypes = {
  slug: PropTypes.object.isRequired,
};
