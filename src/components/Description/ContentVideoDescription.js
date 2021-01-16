import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HeaderContent from './HeaderContent';
const ContentVideoDescription = (props) => {
  const {item} = props;
  const [isLimitLine, setLimitLine] = useState(true);
  const handlePress = () => {
    setLimitLine((prevState) => !prevState);
  };
  return (
    <>
      <HeaderContent item={item} />
      <View style={styles.descriptionSynopsisContainer}>
        <Text style={styles.descriptionTitleText}>Synopsis</Text>
        <Text
          numberOfLines={isLimitLine ? 2 : 20}
          style={[styles.descriptionTitleText, {fontWeight: '100'}]}>
          {item.overview}
        </Text>
        <TouchableOpacity
          onPress={handlePress}
          style={{position: 'absolute', bottom: 0, right: 0}}>
          <Text style={{color: '#c62828'}}>
            {isLimitLine ? 'Read More' : 'See Less'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ContentVideoDescription;

const styles = StyleSheet.create({
  descriptionSynopsisContainer: {
    paddingVertical: 20,
  },
  descriptionTitleText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#455A64',
    textAlign: 'justify',
  },
});
