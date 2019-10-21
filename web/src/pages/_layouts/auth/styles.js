import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #1472b6, #5f47ad);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  span.logo {
    display: block;
    color: #fff;
    font-weight: bold;
    font-size: 80px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      padding: 15px 30px;
      color: #fff;

      + input {
        margin-top: 10px;
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #ff9999;
      align-self: flex-start;
      margin: 2px 0 10px;
    }

    button {
      height: 42px;
      margin-top: 10px;
      border: 0;
      border-radius: 4px;
      background: #1472b6;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#1472b6')};
      }
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
