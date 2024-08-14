import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface props {
    image: ImageSourcePropType,
    text: string,
    onPress: ()=>void
}

const ImageButton: React.FC<props> = ({image, text,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={image}
        style={{width: 220, height: 190, borderRadius: 20}}
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
})

export default ImageButton;
