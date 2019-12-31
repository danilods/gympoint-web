import React from 'react';

import { Container, Table, Content, Actions } from './styles';

export default function Helpers() {
  return (
    <Container>
      <Actions>
        <h1>Pedidos de auxílio</h1>
      </Actions>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Aluno</th>

              <th />
            </tr>
          </thead>
          <tbody>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td align="right">responder</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td align="right">responder</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td align="right">responder</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td align="right">responder</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td align="right">responder</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td align="right">responder</td>
            </tr>

            <tr key="">
              <td>Danilo de Sousa</td>
              <td align="right">responder</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
