import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    sl: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1920',
}

export const Theme = extendTheme({
    colors: {
        brand: {}
    },
    breakpoints
})