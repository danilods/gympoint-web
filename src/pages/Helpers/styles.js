import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 720px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
`;
export const Actions = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    font-size: 20px;
  }

  h1 {
    width: 205px;
    height: 22px;
    font-family: Roboto;
    font-size: 22px;
    font-weight: bold;
  }

  input {
    width: 237px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #dddddd;
    background-color: #ffffff;

    &::placeholder {
      color: #999999;
      margin-left: 15px;
    }
  }

  button {
    width: 142px;
    height: 36px;
    margin-right: 5px;
    border-radius: 4px;
    background-color: #ee4d64;
    color: #fff;
    &:hover {
      background: ${darken(0.05, '#de3b3b')};
    }
  }
`;

export const Content = styled.div`
  padding: 20px 15px;
  background: #fff;
  border-radius: 4px;
`;

export const Table = styled.table`
  width: 100%;
  padding: 12px 30px 5px 12px;

  thead th {
    text-align: left;
    padding: 12px 2px 5px 2px;
  }

  tbody td {
    padding: 25px 2px 5px 2px;
    border-bottom: 1px solid #eee;
    a {
      color: #4d85ee;
    }
  }

  th#delete-column {
    width: 10px;
  }
`;
