
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [reviewed, setReviewed] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>ISE101 • WEEK 2 LAB</Text>
        <Text style={styles.title}>Environment Inspector</Text>
        <Text style={styles.subtitle}>
          Explore the tools behind your mobile app.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Development Tools</Text>

        <Text style={styles.item}>
          <Text style={styles.bold}>Node.js:</Text> Runs JavaScript tools.
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>npm:</Text> Installs and manages packages.
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Expo:</Text> Helps build mobile apps.
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>VS Code:</Text> Edits project files.
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Git:</Text> Tracks changes in code.
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>GitHub:</Text> Hosts and shares repositories.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Project Configuration</Text>
        <Text style={styles.item}>
          Configuration: App settings and identity.
        </Text>
        <Text style={styles.item}>
          Source: Code that builds the interface.
        </Text>
        <Text style={styles.item}>
          Assets: Images, icons, and other media.
        </Text>
        <Text style={styles.item}>
          Dependencies: Libraries the app uses.
        </Text>
      </View>

      <View style={styles.reviewCard}>
        <Text style={styles.cardTitle}>Review Checkpoint</Text>
        <Text style={styles.item}>
          {reviewed
            ? 'Status: Reviewed! You checked the project structure.'
            : 'Status: Not reviewed yet. Explore the project files first.'}
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setReviewed(!reviewed)}
          accessibilityRole="button"
          accessibilityLabel={
            reviewed ? 'Mark project as not reviewed' : 'Mark project as reviewed'
          }
        >
          <Text style={styles.buttonText}>
            {reviewed ? 'Mark Not Reviewed' : 'Mark as Reviewed'}
          </Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        ISE101 • Learn, build, and track your progress.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F6FB',
    padding: 20,
    paddingTop: 55,
  },
  header: {
    backgroundColor: '#173B66',
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,
  },
  eyebrow: {
    color: '#C7DDF8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: '#E1EBF8',
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DFE7F1',
  },
  cardTitle: {
    color: '#173B66',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 14,
  },
  item: {
    color: '#344256',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
  },
  bold: {
    fontWeight: '700',
    color: '#173B66',
  },
  reviewCard: {
    backgroundColor: '#E5F2EA',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#247447',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    textAlign: 'center',
    color: '#66758A',
    fontSize: 12,
    marginVertical: 12,
  },
});
