import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({
  children,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <Text
        style={textStyle}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;