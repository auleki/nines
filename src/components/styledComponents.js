import styled, { css } from 'styled-components'
import { numerics, colors } from './constants'

export const BasicPage = styled.div(
  ({ size, color, centered, full, bg, bgImage }) => css`
    height: ${full ? '100vh' : '100%'};
    font-family: 'Arial';
    background: ${bg || 'transparent'};
    background-image: url(bgImage);
    display: ${centered ? 'flex' : 'inherit'};
    justify-content: ${centered ? 'center' : 'inherit'};
    align-items: ${centered ? 'center' : 'inherit'};
    /* padding: 0 1em; */
  `
)

export const HeaderStyle = styled.div(
  ({ height, bgImage }) => css`
    height: 40vh;
    /* background: ${colors.black}; */
    color: ${colors.bkack};
    padding: 0 0.5em;
  `
)

export const PageContainer = styled.div(
  ({ bg, full, bgImage }) => css`
    /* background-image: url(''); */
    height: ${full ? '100vh' : '100%'};
  `
)

export const LandingContainer = styled.div(
  ({ bgImage }) => css`
    background-image: url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623490557/Trapping/daniel-norin-yVNBH4sPxEI-unsplash_mr3kzq.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
  `
)

export const Title = styled.h1(
  ({ size, color }) => css`
    color: ${colors.white};
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
    box-shadow: -8px 10px 5px -5px rgba(57, 57, 57, 0.15);
    color: #fff;
    margin: 0 auto;
    background: ${colors.black};
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
  ({ textColor, size, bg }) => css`
    background: ${bg || colors.brown};
    padding: 1em 1.5em;
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 0.05em;
    cursor: pointer;
    display: inline;
    color: ${textColor || colors.black};
    border: ${numerics.border} solid transparent;
    transition: 250ms ease-in;

    &:hover,
    &:focus {
      background: ${colors.lightBlack};
      outline: 0;
      color: ${colors.brown};
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
      color: ${colors.altWhite};
    }
  `
)

export const NavlinkStyle = styled.a(
  ({ color }) => css`
    text-decoration: none;
    color: ${colors.sparkGreen};
  `
)

export const Row = styled.div(
  ({ column }) => css`
    display: flex;
    justify-content: space-between;
  `
)

export const NavbarStyle = styled.nav(
  ({ size }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: ${colors.darkBrown};
  `
)
