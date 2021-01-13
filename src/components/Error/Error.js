import React from 'react';
import {View, Text} from 'react-native';

const CustomeError = (props) => {
  const {error} = props;
  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
};

export default CustomeError;
