import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Table, Content, Actions } from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      const data = response.data.map(student => ({
        ...student
      }));
      setStudents(data);
    }
    loadStudents();
  }, []);

  return (
    <Container>
      <Actions>
        <h1>Gerenciando alunos</h1>
        <div>
          <Link to="/students-create">
            <button type="button"> + Cadastrar</button>
          </Link>

          <input type="text" placeholder="Buscar aluno" />
        </div>
      </Actions>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>E-MAIL</th>
              <th>AGE</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.idade}</td>
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
