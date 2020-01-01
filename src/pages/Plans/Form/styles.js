import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
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

  display: flex;
  flex-direction: column;

  label {
    width: 300px;
    height: 75px;
    text-align: left;
    margin-bottom: 10px;
    font-weight: bold;
    color: #444444;
  }

  input {
    margin-top: 8px !important;
    padding: 0 15px;
    margin: 0 0 10px;
    height: 37px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;

    &::placeholder {
      color: #999999;
    }
  }

  div.rowForms {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      width: 970px;
    }

    label {
      display: block;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    label {
      display: block;
    }
  }
`;
