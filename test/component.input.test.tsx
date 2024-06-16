import { render } from "@testing-library/react-native";
import { Input } from "@components/Input";
import { ThemeProvider } from "styled-components/native";
import theme from "../__mocks__/theme";

describe("Component: Input", () => {
  it("deveria renderizar o componente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    );
  });
});
