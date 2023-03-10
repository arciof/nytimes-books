import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Ubuntu', sans-serif;
        user-select: none;
        box-sizing: border-box;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    #root {
        height: 100vh;
        line-height: 1;
        background: rgb(255,210,177);
        background: linear-gradient(90deg, rgba(255,210,177,1) 0%, rgba(240,203,193,1) 35%, rgba(209,191,217,1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ol, ul {
        list-style: none;
    }
`

export default GlobalStyle
