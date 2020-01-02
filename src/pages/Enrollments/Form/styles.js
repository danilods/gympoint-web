import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  strong {
    margin-top: 24px;
  }

  input {
    height: 37px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;

    &::placeholder {
      color: #999999;
    }
  }
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: ${props => (props.nospace ? '0px' : '15px')};
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
