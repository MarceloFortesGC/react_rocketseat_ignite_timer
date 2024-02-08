import { defaultTheme } from './../styles/theme/default';
// Arquivo de definição de tipos

import 'styled-components';
import { defaultTheme } from '../styles/theme/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}