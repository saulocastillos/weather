import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: rgba(0,0,0,0.1);
  padding: 15px;
  margin-top: -40px;
  margin-bottom: 30px;
  border-radius: 16px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  box-shadow: 0px 5px rgba(0,0,0,0.2);

  :active{
    box-shadow: none;
  }

`;