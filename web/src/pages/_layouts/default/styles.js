import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #1472b6, #5f47ad);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Content = styled.div`
  background: #eee;
  border-radius: 4px;
  margin-top: 64px;
  width: 80%;
  height: calc(80% - 64px); /* 64px header height  */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
