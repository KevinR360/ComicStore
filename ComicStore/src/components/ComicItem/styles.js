import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Comic = styled(RectButton)`
  background: rgba(244, 244, 244, 0.1);
  border-radius: 2px;
  margin-bottom: 32px;
  margin-right: 32px;
  align-self: center;
  height: 375px;
  width: 250px;
`;

export const HeaderComic = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #ed1d24;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  padding: 8px;
  color: #f9f9f9;
  font-weight: bold;
`;

export const Thumbnail = styled.Image`
  height: 275px;
  width: 100%;
`;

export const Price = styled.Text`
  height: 50px;
  width: 100%;
  background: #ed1d24;
  padding: 12px;
  color: #f9f9f9;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;
