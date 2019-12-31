import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import * as actions from '../../store/modules/auth/actions';

import logo from '../../assets/logo-2.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .required('A senha é obrigatória')
  });

  function handleSubmit({ email, password }) {
    dispatch(actions.signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">
          SEU E-MAIL
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
          />
        </label>

        <label htmlFor="password">
          SUA SENHA
          <Input name="password" type="password" placeholder="*********" />
          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </label>
      </Form>
    </>
  );
}
