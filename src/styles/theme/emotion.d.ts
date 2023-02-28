import '@emotion/react'
import { ThemeColors } from '../../types/colors'

declare module '@emotion/react' {
    export interface Theme {
        colors: ThemeColors
    }
}
