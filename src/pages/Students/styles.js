import styled from 'styled-components';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;

  > td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #eceeef;
  }
`;
