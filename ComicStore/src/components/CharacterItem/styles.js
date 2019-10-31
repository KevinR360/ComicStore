import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Character = styled(RectButton)`
  height: 72px;
  padding: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.2px;
  border-bottom-color: #333;
  margin-bottom: 2px;
`;

export const Thumbnail = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px !important;
  align-self: flex-start;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
  flex: 1;
  font-size: 16px;
  margin-left: 16px;
`;
