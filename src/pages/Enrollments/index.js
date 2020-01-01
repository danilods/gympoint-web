import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import { Container, Table, Content, Actions } from './styles';

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollments');
      const data = response.data.map(enrollment => ({
        ...enrollment,
        startDateFormatted: format(
          parseISO(enrollment.start_date),
          "'Em' dd 'de' MMMM'",
          { locale: pt }
        ),
        endDateFormatted: format(
          parseISO(enrollment.end_date),
          "'Em' dd 'de' MMMM'",
          { locale: pt }
        )
      }));
      setEnrollments(data);
    }
    loadEnrollments();
  });

  return (
    <Container>
      <Actions>
        <h1>Gerenciando matrículas</h1>
        <div>
          <Link to="/enrollments-create">
            <button type="button"> + Cadastrar</button>
          </Link>{' '}
        </div>
      </Actions>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Plano</th>
              <th>Início</th>
              <th>Término</th>
              <th>Ativa</th>
              <th>#</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enrollment => (
              <tr key={enrollment.id}>
                <td>{enrollment.student.name}</td>
                <td>{enrollment.plans.title}</td>
                <td>{enrollment.startDateFormatted}</td>
                <td>{enrollment.endDateFormatted}</td>
                <td>Sim</td>
                <td align="right">editar</td>
                <td align="left">apagar</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
