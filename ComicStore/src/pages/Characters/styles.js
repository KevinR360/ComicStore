import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin-top: 80px;
`;

export const ListItens = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 4px;
`;
