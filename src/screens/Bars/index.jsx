import { StyleSheet, View, Text, ScrollView } from 'react-native';
import useGlobalContext from '../../hooks/globalContext';
import BarCard from '../../components/BarCard';
import { useNavigation } from '@react-navigation/native';

const Bars = () => {
  const { bars } = useGlobalContext();
  const navigation = useNavigation();

  const handleBarPress = (bar) => () => {
    navigation.navigate('BarDetails', { bar });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>Free Beer Bars</Text>
      <View style={styles.barList}>
        {bars.map((item) => (
          <BarCard onPress={handleBarPress(item)} {...item} key={item.name} />
        ))}

        {bars.map((item) => (
          <BarCard {...item} key={item.name} />
        ))}

        {bars.map((item) => (
          <BarCard {...item} key={item.name} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    color: '#333',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 30,
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  barList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Bars;
