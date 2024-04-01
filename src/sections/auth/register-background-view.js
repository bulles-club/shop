'use client';

import * as Yup from 'yup';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { register } from 'src/services/auth';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

import AuthError from './AuthError';

// ----------------------------------------------------------------------

export default function RegisterBackgroundView() {
  const passwordShow = useBoolean();
  const [error, setError] = useState({});

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const RegisterSchema = Yup.object().shape({
    firstname: Yup.string().required('Le prénom est obligatoire').max(50, '50 charactères maximum'),
    lastname: Yup.string()
      .required('Le nom de famille est obligatoire')
      .max(50, '50 charactères maximum'),
    email: Yup.string().required("L'adresse email est obligatoire").email('Adresse email invalide'),
    password: Yup.string()
      .required('Le mot de passe est obligatoire')
      .min(6, 'Le mot de passe doit faire 6 charactères au minimum'),
    confirmPassword: Yup.string()
      .required('La confirmation du mot de passe est obligatoire')
      .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas'),
  });

  const defaultValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await register(data);
      if (res.jwt) {
        reset();
        await signIn('credentials', {
          redirect: Boolean(true),
          email: data.email,
          password: data.password,
          callbackUrl: callbackUrl || '/',
        });
      } else setError({ message: res.error });
    } catch (err) {
      console.error(err);
      if (err.response.data.error.message === 'Email or Username are already taken')
        setError({ message: 'Cette addresse email est déjà utilisée' });
      else setError({ message: err.message });
    }
  });

  const renderHead = (
    <div>
      <Typography variant="h3" paragraph>
        Création de compte
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {`Vous avez déjà un compte? `}
        <Link component={RouterLink} href={paths.login} variant="subtitle2" color="primary">
          Login
        </Link>
      </Typography>
    </div>
  );

  const renderSocials = (
    <Stack direction="row" spacing={2}>
      <Button fullWidth size="large" color="inherit" variant="outlined">
        <Iconify icon="logos:google-icon" width={24} />
      </Button>

      <Button fullWidth size="large" color="inherit" variant="outlined">
        <Iconify icon="carbon:logo-facebook" width={24} sx={{ color: '#1877F2' }} />
      </Button>

      <Button color="inherit" fullWidth variant="outlined" size="large">
        <Iconify icon="carbon:logo-github" width={24} sx={{ color: 'text.primary' }} />
      </Button>
    </Stack>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5}>
        <RHFTextField name="firstname" label="Prénom" />

        <RHFTextField name="lastname" label="Nom de famille" />

        <RHFTextField name="email" label="Adresse email" />

        <RHFTextField
          name="password"
          label="Mot de passe"
          type={passwordShow.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Confirmation du mot de passe"
          type={passwordShow.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {error?.message && <AuthError error={error} setError={setError} />}

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Inscription
        </LoadingButton>

        <Typography variant="caption" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
          {`Je valide les `}
          <Link color="text.primary" href="#" underline="always">
            Conditions générales de vente
          </Link>
          {` et la `}
          <Link color="text.primary" href="#" underline="always">
            Politique de confidentialité.
          </Link>
        </Typography>
      </Stack>
    </FormProvider>
  );

  return (
    <>
      {renderHead}

      {renderForm}

      <Divider>
        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          ou continuez avec
        </Typography>
      </Divider>

      {renderSocials}
    </>
  );
}
