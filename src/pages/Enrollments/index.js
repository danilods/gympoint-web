import React from 'react';

import { Container, Table, Content, Actions } from './styles';

export default function Enrollments() {
  return (
    <Container>
      <Actions>
        <h1>Gerenciando matrículas</h1>
        <div>
          <button type="button"> + Cadastrar</button>
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
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>Gold</td>
              <td>30 de abril de 2019</td>
              <td>30 demaio de 2019</td>
              <td>Sim</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
