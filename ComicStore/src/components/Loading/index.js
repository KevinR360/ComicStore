import React from 'react';
import {ActivityIndicator} from 'react-native';

export default function Loading() {
  return (
    <ActivityIndicator
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 999,
        height: 60,
        width: 60,
        backgroundColor: '#fff',
        borderRadius: 30,
      }}
      size={50}
      color={'#CE2F34'}
    />
  );
}
