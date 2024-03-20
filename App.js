import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/home";
import About from "./components/about";
import Signup from "./components/signup";
import Login from "./components/login";
import Module from "./components/module";
import QuestionsPage from "./components/QuestionPage";
import Profile from "./components/profile";
import CourseAccess from "./components/CourseAccess";
import TryFetch from "./components/TryFetch";
const Stack = createStackNavigator();

export default function App() {
  return (
    // <TryFetch/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module"
          component={Module}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionsPage"
          component={QuestionsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="CourseAccess"
        component={CourseAccess}
        options={{ headerShown: false }}
        />
                
      </Stack.Navigator>
    </NavigationContainer>
  );
}
