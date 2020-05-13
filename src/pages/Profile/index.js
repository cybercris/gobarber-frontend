import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  const formik = useFormik({
    initialValues: {
      name: profile.name,
      email: profile.email,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
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
        />
        <input name="password" type="password" placeholder="Nova senha" />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
