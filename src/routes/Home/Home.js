import React from 'react';
import {View, Dimensions, StyleSheet, FlatList,Text} from 'react-native';
import Seacrh from '../../components/Search/Seacrh';
import {useGetAllMovies} from '../../hooks';

const {height, width} = Dimensions.get('window');

const Home = () => {
  const {data} = useGetAllMovies();
  console.log(data);
  return (
    <View style={styles.container}>
      <Seacrh />
      <FlatList
        data={data?.results}
        ListEmptyComponent={() => (
          <View>
            <Text>salam</Text>
          </View>
        )}
        keyExtractor={(data, index) => index.toString()}
        renderItem={({item, index}) => (
          <View>
            <Text>{item.overview}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (4 * width) / 100,
    paddingVertical: (height * 2) / 100,
  },
});
