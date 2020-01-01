import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import { Container, Table, Content, Actions } from './styles';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const data = response.data.map(plan => ({
        ...plan,
        priceFormatted: formatPrice(plan.price)
      }));
      setPlans(data);
    }
    loadPlans();
  }, []);

  return (
    <Container>
      <Actions>
        <h1>Gerenciando planos</h1>
        <div>
          <Link to="/plans-create">
            <button type="button"> + Cadastrar</button>
          </Link>
        </div>
      </Actions>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Tipo de plano</th>
              <th>Duração</th>
              <th>Valor/Mês</th>

              <th>#</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.duration} meses</td>
                <td>{plan.priceFormatted} </td>

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
