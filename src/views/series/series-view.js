'use client';

import PropTypes from 'prop-types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { Typography } from '@mui/material';
import { Box, Stack, Container } from '@mui/system';

import useSerie from 'src/hooks/use-serie';

import BookDetailsItem from 'src/views/book/book-details-item';
import EcommerceProductDetailsAuthor from 'src/views/book/book-details-author';

import Label from 'src/components/label';
import { SplashScreen } from 'src/components/loading-screen';
import BookListItem from 'src/components/book-item/book-list-item';

// ----------------------------------------------------------------------

export default function SeriesView({ slug }) {
  const { loading, serie } = useSerie(slug);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Container>
      <Box sx={{ flexGrow: 1, mb: 8 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h3">{serie.name}</Typography>
          <Stack spacing={2} sx={{ mt: 2, mb: 7 }}>
            <EcommerceProductDetailsAuthor
              label={serie?.creators.length > 1 ? 'Créateur(s)' : 'Créateur'}
              authors={serie?.creators}
            />
            <BookDetailsItem label="Première publication" value={serie?.firstPublicationYear} />
            <BookDetailsItem
              label="Statut"
              value={
                serie?.ended ? (
                  <Label color="warning">Terminée</Label>
                ) : (
                  <Label color="success">En cours</Label>
                )
              }
            />
            <BlocksRenderer content={serie?.description} />
          </Stack>
          <Stack spacing={3.6}>
            {serie?.books.map((book) => (
              <BookListItem
                key={book.id}
                slug={book.slug}
                title={book.title}
                coverUrl={book.coverUrl}
                description={book.descriptionText}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

SeriesView.propTypes = {
  slug: PropTypes.object.isRequired,
};
