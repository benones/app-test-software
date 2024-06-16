import { render } from "@testing-library/react-native";
import { NewGroup } from "@screens/NewGroup";
import { ThemeProvider } from "styled-components/native";
import theme from "../__mocks__/theme";
import { Input } from "@components/Input";

describe("Component: Button", () => {
  it("deveria renderizar o componente button", () => {
    const nomeGrupo = "UNASP";
    render(
      <ThemeProvider theme={theme}>
        <Input
          onChangeText={() => {
            nomeGrupo;
          }}
        />
      </ThemeProvider>
    );
  });
});
