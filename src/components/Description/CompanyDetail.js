import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CompanyDetail = (props) => {
  const {company} = props;
  return (
    <View style={styles.companyContainer}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${company.logo_path}`,
        }}
        resizeMode={'stretch'}
        style={styles.companyImage}
      />
      <Text style={styles.descriptionTitleText}>{company.name}</Text>
    </View>
  );
};

export default CompanyDetail;

const styles = StyleSheet.create({
  companyContainer: {
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyImage: {width: 50, height: 50}
});
