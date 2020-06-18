import { css } from 'styled-components';
import Color from './color';

export const baseStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    background-color: ${Color.ColorWhite};
    box-sizing: border-box;
    word-break: break-all;
    word-wrap: break-word;
  }

  body {
    background-color: ${Color.ColorWhite};
    color: ${Color.ColorBlack};
    font-family: 'Noto', Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka,
      'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
    font-size: 14px;
    font-weight: var(--normal);
    line-height: 1.5;
  }

  a {
    color: ${Color.ColorBlack};
    display: inline-block;
    outline: none;
    text-decoration: none;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: bottom;
  }

  hr {
    border: 0;
    border-top: 1px solid ${Color.ColorHorizontal};
    display: block;
    height: 1px;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input,
  select {
    vertical-align: middle;
  }

  input,
  select,
  button {
    cursor: pointer;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'] {
    cursor: auto;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
`

export const resetStyle = css`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    background: transparent;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }

  ul {
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: none;
    border-radius: 0;
    box-shadow: 0 0 0 0;
    font-family: inherit;
    margin: 0;
    outline: none;
    padding: 0;
    &:focus {
      box-shadow: 0 0 0 0;
      outline: none;
    }
  }

  select {
    &::-ms-expand {
      display: none;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }

  input[type='number'] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`