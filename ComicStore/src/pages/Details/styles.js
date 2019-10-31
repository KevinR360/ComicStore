import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin-top: 80px;
  flex: 1;
  height: 100%;
  width: 100%;
  background: transparent;
`;

export const Thumbnail = styled.Image`
  height: 375;
  width: 250;
  margin-top: 16px;
  margin-left: 8px;
`;

export const Title = styled.Text`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
  color: #f9f9f9;
`;

export const Description = styled.Text`
  padding: 8px 16px;
  font-size: 16px;
  color: #eee;
`;

export const Price = styled.Text`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
