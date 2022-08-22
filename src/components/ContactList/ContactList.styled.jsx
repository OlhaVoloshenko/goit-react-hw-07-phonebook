import styled from '@emotion/styled';

export const ContactListBox = styled.ul`
  margin: 0 auto;
  padding: 12px;
  margin-top: 24px;
  width: 320px;
  background-color: #e0e0bf;
  border: 1px solid black;
  border-radius: 8px;
`;
export const ListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 4px;
  max-width: 360px;
  background-color: white;
  border-radius: 4px;
`;
export const NumByOrder = styled.span`
  margin-right: 10px;
  padding: 0 4px;
  width: 8px;
  border-right: 1px inset black;
  border-radius: 50%;
`;
export const TelNum = styled.span`
  font-weight: 700;
  margin-left: 8px;
  color: #0e43d3;
`;
export const DelBtn = styled.button`
  margin-left: auto;
  border: 1px inset #8fcbdd;
  background-color: #8fcbdd;
  border-bottom-left-radius: 8px;
`;
