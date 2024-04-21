'use client';

import PropTypes from 'prop-types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { Box, Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';

import useAuthor from 'src/hooks/use-author';

import Image from 'src/components/image';
import { SplashScreen } from 'src/components/loading-screen';

import Bookshelf from '../../components/bookshelf/bookshelf';

// ----------------------------------------------------------------------

export default function AuthorView({ slug }) {
  const { loading, author } = useAuthor(slug);
  console.log(author);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          pl: { md: 8 },
          mt: 10,
        }}
      >
        <Typography variant="h3">{author.name}</Typography>

        <Grid
          container
          flexWrap="nowrap"
          columnGap={5}
          direction="row-reverse"
          sx={{ mb: 2, mt: 2 }}
        >
          <Grid item>
            <Box
              sx={{
                borderRadius: 1,
                bgcolor: 'background.neutral',
                width: 240,
                mt: 1,
              }}
            >
              <Image
                sx={{
                  m: 1,
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
                alt={author.name}
                src={author.photoUrl}
              />
            </Box>
          </Grid>
          <Grid item>
            <BlocksRenderer content={author.bio} />
          </Grid>
        </Grid>

        {author.series.map((series) => (
          <Bookshelf key={series.id} title={series.name} books={series.books} />
        ))}
      </Box>
    </Container>
  );
}

AuthorView.propTypes = {
  slug: PropTypes.string.isRequired,
};
