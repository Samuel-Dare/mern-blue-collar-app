import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
     &, &.light {
        
        /* Light Mode Palette */

        --color-background: #F5F5F5;
        --color-text: #333333;
        --color-accent: #007BFF;
        --color-button: #FF8800;
        --color-highlight: #FFFFFF;
        --color-cards: #E5E5E5;
        --color-secondary-text: #666666;
    }

    &.dark {

        /* Dark Mode Palette */

        --color-background: #333333;
        --color-text: #F5F5F5;
        --color-accent: #80B3FF;
        --color-button: #FFAA33;
        --color-highlight: #444444;
        --color-cards: #666666;
        --color-secondary-text: #C5C5C5;
    }
}
`;

export default GlobalStyles;
