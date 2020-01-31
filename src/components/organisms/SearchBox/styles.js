import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto 75px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;

  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: rgba(255,255,255,0.5);
  border-radius: 0px 0px 16px 16px;
  margin-top: -25px;

  box-shadow: 0px 5px rgba(0,0,0,0.2);

  color: #313131;
  font-size: 20px;

  transition: 0.4s ease;

  :focus{
    background-color: rgba(255,255,255,0.75);
  }
`;