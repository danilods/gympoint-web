import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import * as action from '../../../store/modules/plans/actions';

import { Container, Content, Actions } from './styles';

export default function PlansForm() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    title: Yup.string().required('O nome é obrigatório'),
    duration: Yup.number().required('campo duração é obrigatório'),
    price: Yup.number().required('Preço mensal é obrigatório')
  });

  function handleSubmit(data) {
    dispatch(action.createPlanRequest(data));
  }

  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Actions>
            <h1>Cadastro de plano</h1>
            <div>
              <Link to="/plans">
                <button type="button">VOLTAR</button>
              </Link>
              <button type="submit">SALVAR</button>
            </div>
          </Actions>
          <Content>
            <div />
            <div className="rowForms">
              <label htmlFor="title">
                TÍTULO DO PLANO
                <Input
                  name="title"
                  placeholder="Ex: Gold, Premium, Platinum."
                />
              </label>
            </div>
            <div>
              <label htmlFor="duration">
                DURAÇÃO (EM MESES)
                <Input name="duration" type="text" />
              </label>
              <label htmlFor="price">
                PREÇO MENSAL (R$)
                <Input name="price" type="text" />
              </label>
              <label htmlFor="totalPrice">
                PREÇO TOTAL
                <Input name="totalPrice" type="text" disabled />
              </label>
            </div>
          </Content>
        </Form>
      </Container>
    </>
  );
}
