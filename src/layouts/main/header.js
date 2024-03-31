import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();
  const offset = useOffSetTop();
  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            height: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <NavDesktop data={navConfig} />
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
      </>

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        <Stack spacing={1} direction="row" alignItems="center">
          <Searchbar />
        </Stack>
      </Stack>

      <Stack spacing={3} direction="row" alignItems="center" flexGrow={1} justifyContent="flex-end">
        {!mdUp && (
          <IconButton size="small" color="inherit" sx={{ p: 0 }}>
            <Iconify icon="carbon:search" width={24} />
          </IconButton>
        )}

        <Badge badgeContent={2} color="info">
          <IconButton
            component={RouterLink}
            href={paths.eCommerce.wishlist}
            size="small"
            color="inherit"
            sx={{ p: 0 }}
          >
            <Iconify icon="carbon:favorite" width={24} />
          </IconButton>
        </Badge>

        <Badge badgeContent={4} color="error">
          <IconButton
            component={RouterLink}
            href={paths.eCommerce.cart}
            size="small"
            color="inherit"
            sx={{ p: 0 }}
          >
            <Iconify icon="carbon:shopping-cart" width={24} />
          </IconButton>
        </Badge>

        <IconButton
          component={RouterLink}
          href={paths.account.personal}
          size="small"
          color="inherit"
          sx={{ p: 0 }}
        >
          <Iconify icon="carbon:user" width={24} />
        </IconButton>
      </Stack>

      {!mdUp && <NavMobile data={navConfig} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
