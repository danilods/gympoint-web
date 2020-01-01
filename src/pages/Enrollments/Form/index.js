import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { Link } from 'react-router-dom';

import { Form, Input, useField } from '@rocketseat/unform';
import * as Yup from 'yup';
import AsyncSelect from 'react-select/async';

import * as action from '../../../store/modules/enrollments/actions';

import { Container, Content, Actions } from './styles';

const options = [
  { id: 1, title: 'ReactJS' },
  { id: 2, title: 'NodeJS' },
  { id: 3, title: 'React Native' }
];

const plans = [
  { id: 1, title: 'ReactJS' },
  { id: 3, title: 'NodeJS' },
  { id: 4, title: 'React Native' }
];

export default function EnrollmentsForm() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    plan: Yup.string().required('campo duração é obrigatório'),
    start_date: Yup.date().required('Preço mensal é obrigatório')
  });

  function handleSubmit(data) {
    console.tron.error(data);
    dispatch(action.createEnrollmentRequest(data));
  }

  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Actions>
            <h1>Cadastro de matrícula</h1>
            <div>
              <button type="submit">Salvar</button>
              <Link to="/plans">VOLTAR</Link>
            </div>
          </Actions>
          <Content>
            <div />
            <div className="rowForms">
              <label htmlFor="name">
                ALUNO
                <ReactSelect name="name" options={options} />
              </label>
            </div>
            <div>
              <label htmlFor="plan">
                PLANO
                <div className="selectElement">
                  <ReactSelect name="plan" options={plans} />
                </div>
              </label>
              <label htmlFor="start">
                DATA DE INÍCIO
                <Input name="startDate" type="text" />
              </label>

              <label htmlFor="endDate">
                DATA DE TÉRMINO
                <Input name="endDate" type="text" />
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
