import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
      <Stack>
        <Stack.Screen name="homeindex" options={{ headerShown: false,animation:'ios' }} />
        <Stack.Screen name="convert" options={{ headerShown: false,animation:'ios' }} />
        <Stack.Screen name="deposit" options={{ headerShown: false,animation:'ios' }} />
        <Stack.Screen name="send" options={{ headerShown: false,animation:'ios' }} />
        <Stack.Screen name="withdraw" options={{ headerShown: false,animation:'ios' }} />
      </Stack>
  );
};

export default _layout;