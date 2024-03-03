import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
