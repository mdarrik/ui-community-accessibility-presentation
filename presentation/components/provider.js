/** @jsx jsx */
import { jsx} from 'theme-ui'
import { useDeck } from 'mdx-deck'


export default props => {
    const state = useDeck
    return (
        <main sx={{
            mx: 2
        }}>
            {props.children}
        </main>
    )
}