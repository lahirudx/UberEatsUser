import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import restaurants from './assets/data/restaurants.json';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.restaurantContainer}>
        <Image source={{ uri: restaurants[0].image }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {restaurants[0].dishes[0].name}
        </Text>
        <Text style={styles.subtitle}>
          {`$ ${restaurants[0].dishes[0].price}`}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  restaurantContainer: {
    width: '100%'
  },
  image: {
    width: '100%',
    aspectRatio: 5/3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 5,
  },
  subtitle: {
    color: 'grey'
  }
});
