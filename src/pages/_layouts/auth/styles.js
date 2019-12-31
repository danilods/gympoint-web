import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 360px;
  height: 448px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;

  img {
    margin-top: 20px;
    padding-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    align-items: center;

    label {
      width: 300px;
      height: 75px;
      text-align: left;
      margin-bottom: 10px;
      font-weight: bold;
      color: #444444;
    }

    input {
      width: 300px;
      height: 45px;
      border-radius: 4px;
      border: solid 1px #dddddd;
      padding: 0 15px;
      margin: 0 0 10px;
      background-color: #ffffff;

      &::placeholder {
        color: #999999;
      }
    }

    button {
      margin: 5px 0 0;
      width: 300px;
      height: 45px;
      border-radius: 4px;
      background-color: #ee4d64;

      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#ee4d64')};
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
