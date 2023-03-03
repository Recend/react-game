import { View, Text, Pressable, StyleSheet } from 'react-native';
function PrimaryButton(props) {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={styles.buttonContainer}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
