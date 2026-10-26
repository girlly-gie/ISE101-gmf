
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [showFact, setShowFact] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello everyone!
      </Text>

      <Text style={styles.subtitle}>
        I'm Girlly Fernandez from BSIS-3A
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          About Me
        </Text>
        <Text style={styles.description}>
         I am a student who enjoys learning new things
        and exploring technology. My hobbies are listening to music, watching
        TikTok, singing, and spending time with my family.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Counter: {count}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => setCount(count + 1)}
          accessibilityRole="button"
          accessibilityLabel="Increase counter"
        >
          <Text style={styles.buttonText}>
            Add One
          </Text>
        </Pressable>

        <Pressable
          style={styles.resetButton}
          onPress={() => setCount(0)}
          accessibilityRole="button"
          accessibilityLabel="Reset counter to zero"
        >
          <Text style={styles.buttonText}>
            Reset Counter
          </Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Pressable
          onPress={() => setShowFact(!showFact)}
          accessibilityRole="button"
          accessibilityLabel="Toggle Android fact"
          accessibilityState={{ expanded: showFact }}
        >
          <Text style={styles.buttonText}>
            {showFact ? 'Hide Mobile Fact' : 'Show Mobile Fact'}
          </Text>
        </Pressable>

        {showFact && (
          <Text style={styles.description}>
            Android apps can be built using tools
            such as React Native and Expo.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F7FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#174A7E',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#526579',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#174A7E',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#34495E',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2471A3',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  resetButton: {
    backgroundColor: '#526579',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
