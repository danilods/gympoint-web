import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import * as action from '../../../store/modules/students/actions';

import { Container, Content, Actions } from './styles';

export default function StudentForm() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    idade: Yup.number().required('A idade é obrigatória'),
    peso: Yup.number().required('Peso é obrigatório'),
    altura: Yup.number().required('A altura é obrigatória')
  });

  function handleSubmit(data) {
    dispatch(action.createStudentRequest(data));
  }

  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Actions>
            <h1>Cadastrar novo aluno</h1>
            <div>
              <button type="submit">Salvar</button>
              <Link to="/students">VOLTAR</Link>
            </div>
          </Actions>
          <Content>
            <div />
            <div className="rowForms">
              <label htmlFor="name">
                NOME COMPLETO
                <Input name="name" placeholder="Nome completo" />
              </label>
              <label htmlFor="email">
                EMAIL
                <Input name="email" type="email" placeholder="Seu e-mail" />
              </label>
            </div>
            <div>
              <label htmlFor="idade">
                Idade
                <Input name="idade" type="text" placeholder="Idade do aluno" />
              </label>
              <label htmlFor="peso">
                Peso(kg)
                <Input name="peso" type="text" placeholder="Peso do aluno" />
              </label>
              <label htmlFor="altura">
                Altura
                <Input
                  name="altura"
                  type="text"
                  placeholder="Altura do aluno"
                />
              </label>
            </div>
          </Content>
        </Form>
      </Container>
    </>
  );
}
