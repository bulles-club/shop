'use client';

import PropTypes from 'prop-types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { Box, Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';

import useAuthor from 'src/hooks/use-author';

import { STRAPI_URL } from 'src/config-global';

import Image from 'src/components/image';
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Auteur',
};

export default function AuthorPage({ params }) {
  const { loading, author } = useAuthor(params.id);

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

        {/* <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 7 }}> */}
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
                src={STRAPI_URL + author.photoUrl}
              />
            </Box>
          </Grid>
          <Grid item>
            <BlocksRenderer content={author.bio} />
          </Grid>
        </Grid>

        {/* </Stack> */}
      </Box>
    </Container>
  );
}

AuthorPage.propTypes = {
  params: PropTypes.object.isRequired,
};
