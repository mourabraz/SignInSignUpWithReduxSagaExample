import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  height: 64px;
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    span.logo {
      display: block;
      color: #1472b6;
      font-weight: bold;
      font-size: 20px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #1472b6;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const SignOut = styled.div`
  button {
    border: 0;
    border-radius: 4px;
    background: #1472b6;
    color: #fff;
    padding: 15px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#1472b6')};
    }
  }
`;
