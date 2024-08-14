import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface props {
  image: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

const ImageButton: React.FC<props> = ({image, text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{marginHorizontal: 80, marginVertical: 4}}>
      <Image
        source={image}
        style={{
          width: '100%',
          height: 170,
          borderRadius: 20,
          objectFit: 'cover',
        }}
      />

      <Text style={styles.headingText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default ImageButton;
