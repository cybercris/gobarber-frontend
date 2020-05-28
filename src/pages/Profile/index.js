import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const formik = useFormik({
    initialValues: {
      name: profile.name,
      email: profile.email,
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      dispatch(updateProfileRequest(values));
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <AvatarInput name="avatar_id" />
        <input
          name="name"
          placeholder="Nome completo"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Seu endereço de email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <hr />
        <input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
          value={formik.values.oldPassword}
          onChange={formik.handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Nova senha"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />

        <button type="submit">Atualizar Perfil</button>
      </form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
