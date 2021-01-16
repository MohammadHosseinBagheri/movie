import React from 'react';
import {StyleSheet} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const MySharedElement = (props) => {
  const {children, id} = props;
  return <SharedElement id={id}>{children}</SharedElement>;
};

export default MySharedElement;

const styles = StyleSheet.create({});
