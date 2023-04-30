import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 20px 30px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  width: 200px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
`;
