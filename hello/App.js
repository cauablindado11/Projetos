import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ContatosScreen from './ContatosScreen';
import PerfilScreen from './PerfilScreen';
import TecladoScreen from './TecladoScreen';
import RecentesScreen from './RecentesScreen';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabIcon = ({ label, color }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color, fontSize: 16 }}>{label}</Text>
  </View>
);

const Navegacao = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: 'black', height: 60, borderTopWidth: 0 },
          showIcon: false,
          showLabel: false,
          tabStyle: { justifyContent: 'center' },
        }}
      >
        <Tab.Screen
          name="Contatos"
          component={ContatosScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <CustomTabIcon label="Contatos" color={color} />,
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <CustomTabIcon label="Perfil" color={color} />,
          }}
        />
        <Tab.Screen
          name="Teclado"
          component={TecladoScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <CustomTabIcon label="Teclado" color={color} />,
          }}
        />
        <Tab.Screen
          name="Recentes"
          component={RecentesScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <CustomTabIcon label="Recentes" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navegacao;