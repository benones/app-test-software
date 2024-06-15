import { render } from "@testing-library/react-native"
import { Button } from "@components/Button"
import { ThemeProvider } from 'styled-components/native';
import theme from "../__mocks__/theme";


describe("Component: Button", () => {
    it("deveria renderizar o componente button", () => {
        render(
            <ThemeProvider theme={theme}>
                <Button title="Salvar" />

            </ThemeProvider>
        )

    })
});