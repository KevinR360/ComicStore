import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: transparent;
  margin-top: 70px;
`;

export const ComicsList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  padding: 16px 8px;
  margin-top: 12px;
`;

export const PageCounter = styled.View`
  margin-top: 62px;
  height: 50px;
  align-self: stretch;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
`;

export const HandlePage = styled(RectButton)`
  height: 48px;
  width: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const PageNumber = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 30px;
`;
