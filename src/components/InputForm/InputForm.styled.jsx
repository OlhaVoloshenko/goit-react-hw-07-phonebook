import styled from '@emotion/styled';
import { Field } from 'formik';

export const InputFormBox = styled.div`
  padding: 12px;
  margin: 4px;
  width: 360px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: beige;
`;

export const InputItem = styled(Field)`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  margin-top: 4px;
  :invalid {
    border: 2px inset #206ed4;
  }
  :invalid:required {
    background-image: linear-gradient(to right, #71a3e4, #e0e0bf);
  }
`;
