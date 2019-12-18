import Provider from './components/provider'
import merge from 'lodash.merge'
import {code} from 'mdx-deck/themes'



const theme = merge({Provider}, code, {
    fontSizes: [
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.3rem",
    "2.6rem",
    "3rem"
    ],
    fonts: {
        body: 'system-ui sans-serif',
        heading: '"Source Code Pro", monospace'
    }
})

const themeGenerator = () => {
    console.log(theme)
    return theme
}

export default themeGenerator()