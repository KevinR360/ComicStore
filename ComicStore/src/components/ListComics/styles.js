import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: transparent;
  display: ${props => (props.visibled ? 'flex' : 'none')};
`;

export const ComicsList = styled.FlatList`
  padding: 16px 8px;
  margin-top: 12px;
`;
