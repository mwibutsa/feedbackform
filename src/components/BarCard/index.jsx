import { StyleSheet } from 'react-native';
import { Image, Text, TouchableOpacity } from 'react-native';

const BarCard = ({ name, image, feedback, onPress }) => (
  <TouchableOpacity
    disabled={!onPress}
    onPress={onPress}
    key={name}
    style={styles.barCard}
  >
    <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
    <Text style={styles.title}>
      {name} ({feedback && feedback.length})
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  barCard: {
    margin: 5,
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 170,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#555555',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default BarCard;
