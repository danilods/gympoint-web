import React from 'react';

import { Container, Table, Content, Actions } from './styles';

export default function Plans() {
  return (
    <Container>
      <Actions>
        <h1>Gerenciando planos</h1>
        <div>
          <button type="button"> + Cadastrar</button>
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
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Gold</td>
              <td>1 mês</td>
              <td>R$129.00</td>

              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
