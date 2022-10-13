import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    sm: '320px',
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