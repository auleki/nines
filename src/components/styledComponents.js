import styled, { css } from 'styled-components'
import { numerics, colors } from './constants'

export const BasicPage = styled.div(
  ({ size, color, centered, full }) => css`
    height: ${full ? '100vh' : '100%'};
    font-family: 'Arial';
    display: ${centered ? 'flex' : 'inherit'};
    justify-content: ${centered ? 'center' : 'inherit'};
    align-items: ${centered ? 'center' : 'inherit'};
    /* padding: 0 1em; */
  `
)

export const Title = styled.h1(
  ({ size, color }) => css`
    font-size: 1.3em;
  `
)

export const Box = styled.div(
  ({ size, minimized }) => css`
    /* height: 100%; */
    height: 30rem;
    padding: 1em;
    border-radius: ${numerics.border}em;
    width: 30rem;
    color: #fff;
    margin: 0 auto;
    background: black;
  `
)

export const Form = styled.form(
  ({ size, marginTop, marginDown }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: ${marginTop ? marginTop : 0}em;
    margin-bottom: ${marginDown ? marginDown : 0}em;

    .inputGroup {
      display: flex;
      flex-direction: column;
      margin: 1em 0;

      &.flex {
        display: flex;
      }

      label {
        margin-bottom: 0.5em;
      }

      input {
        border-radius: ${numerics.border};
        outline: 0;
        padding: 1em;
      }
    }
  `
)

export const Button = styled.button(
  ({ color, size }) => css`
    background: #ddd;
    padding: 1em 1.5em;
    font-size: 1em;
    cursor: pointer;
    display: inline;
    border: ${numerics.border} solid transparent;
    transition: 250ms ease-in;

    &:hover,
    &:focus {
      background: #444;
      outline: 0;
      border: ${numerics.border} solid turquoise;
    }
  `
)

export const TextLink = styled.a(
  ({ color }) => css`
    text-decoration: none;
    color: ${colors.white};
    cursor: pointer;
    display: inline;
    &:hover {
      color: orange;
    }
  `
)

export const Row = styled.div(
  ({ column }) => css`
    display: flex;
    justify-content: space-between;
  `
)
