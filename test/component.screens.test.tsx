jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";
import { render } from "@testing-library/react-native";
import theme from "../__mocks__/theme";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

describe("Render Screens", () => {
  const Stack = createNativeStackNavigator();

  const mockRoute = {
    params: { group: "Test Group" },
  };

  it("Deve renderizar: Groups", () => {
    render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Groups />
        </NavigationContainer>
      </ThemeProvider>
    );
  });

  it("Deve renderizar: Players", () => {
    render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Players"
              component={Players}
              initialParams={mockRoute}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );
  });

  it("Deve renderizar: NewGroup", () => {
    render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <NewGroup />
        </NavigationContainer>
      </ThemeProvider>
    );
  });
});
