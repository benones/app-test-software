// test-utils.js
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { render } from '@testing-library/react-native';
import theme from '@theme/index'; // caminho para o arquivo do tema

const AllTheProviders: React.FC = ({ children }) => (
    <ThemeProvider>
    { children }
    < /ThemeProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };