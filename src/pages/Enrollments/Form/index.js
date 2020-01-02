import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addMonths, format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Select from '../../../components/Selects';
import DatePicker from '../../../components/Datepicker';
import { formatPrice } from '../../../util/format';

import * as action from '../../../store/modules/enrollments/actions';

import { Container, Column, Row, Field, Actions } from './styles';

export default function EnrollmentsForm() {
  const dispatch = useDispatch();

  const [plan, setPlans, enrollment, setEnrollment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [
    endDate,
    setEndDate,
    totalPrice,
    setTotalPrice,
    enrollmentDuration,
    setEnrollmentDuration
  ] = useState('');
  const [startDate, setStartDate, planSelected, setPlanSelected] = useState();

  const schema = Yup.object().shape({
    student_id: Yup.number()
      .integer()
      .typeError('O campo aluno é obrigatório!')
      .required('Nome do aluno é obrigatório!'),
    plan_id: Yup.number()
      .integer()
      .typeError('O Campo plano é obrigatório!')
      .required('O Campo plano é obrigatório!'),
    start_date: Yup.date()
      .typeError('A data inicial é obrigatória!')
      .required('A data inicial é obrigatória!')
  });

  const totalPriceCalc = useMemo(() => {
    return formatPrice(enrollmentDuration * totalPrice);
  }, [enrollmentDuration, totalPrice]);

  const getEndDate = useMemo(() => {
    if (startDate && enrollmentDuration) {
      const futureDate = addMonths(startDate, enrollmentDuration);
      return format(futureDate, 'dd/MM/yyy', { locale: pt });
    }
    return 0;
  }, [startDate, enrollmentDuration]);

  async function loadPlans() {
    const response = await api.get('plans');

    setPlans(response.data);
  }

  function handleSubmit(data) {
    console.tron.error(data);
    dispatch(action.createEnrollmentRequest(data));
  }

  function handleEdit(data) {}

  return (
    <>
      <Container>
        <Form schema={schema}>
          <div>
            <header>
              <strong />
              <div />
            </header>
          </div>
          <Actions>
            <h1>Cadastro de plano</h1>
            <div>
              <Link to="/enrollments">
                <MdKeyboardArrowLeft size={20} color="#fff" />
                VOLTAR
              </Link>
              <button type="submit">
                <MdDone size={20} color="#fff" />
                SALVAR
              </button>
            </div>
          </Actions>

          <Column>
            <Field nospace>
              <strong>Aluno</strong>
              <Select name="student_id" placeholder="Buscar aluno" />
            </Field>
            <Row>
              <Field nospace>
                <strong>Plano</strong>
                <Select name="plan_id" placeholder="Selecione o plano" />
              </Field>
              <Field>
                <strong>Data de início</strong>
                <DatePicker name="start_date" placeholder="Escolha a data" />
              </Field>
              <Field>
                <strong>Data de término</strong>
                <Input name="end_date" disabled />
              </Field>
              <Field>
                <strong>Valor Total</strong>
                <Input name="price" disabled />
              </Field>
            </Row>
          </Column>
        </Form>
      </Container>
    </>
  );
}
