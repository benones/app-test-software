jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

import { render } from "@testing-library/react-native";
import { Button } from "@components/Button";
import { ThemeProvider } from "styled-components/native";
import theme from "../__mocks__/theme";
import { NavigationContainer } from "@react-navigation/native";
import { Groups } from "@screens/Groups";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewGroup } from "@screens/NewGroup";

describe("Component: Button", () => {
  const Stack = createNativeStackNavigator();

  const mockRoute = {
    params: { group: "Test Group" },
  };

  it("deveria renderizar o componente button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button title="Salvar" />
      </ThemeProvider>
    );
  });

  it("Deveria renderizar o componente button na tela Groups", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Groups />
        </NavigationContainer>
      </ThemeProvider>
    );

    const element = getByText("Criar nova turma");
    expect(element).toBeTruthy();
  });

  it("Deveria renderizar o componente button na tela NewGroup", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="new"
              component={NewGroup}
              initialParams={mockRoute}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );

    const element = getByText("Criar");
    expect(element).toBeTruthy();
  });

  it("Deveria renderizar o componente button na tela Players", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="players"
              component={NewGroup}
              initialParams={mockRoute}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );

    const element = getByText("Criar");
    expect(element).toBeTruthy();
  });
});
