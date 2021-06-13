import styled, { css } from 'styled-components'
import { numerics, colors, fonts } from './constants'

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

// export const AppContainer = styled.div(
//   ({ color }) => css`
//     height: 100vh;
//     overflow-y: hidden;
//   `
// )

export const HeaderStyle = styled.div(
  ({ height, bgImage }) => css`
    /* height: 40vh; */
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: ${colors.bkack};
    padding: 0 0.5em;

    a {
      text-decoration: none;
    }
  `
)

export const PageContainer = styled.div(
  ({ bg, full, bgImage }) => css`
    /* background-image: url(''); */
    height: ${full ? '100vh' : '100%'};
  `
)

export const StoreContainer = styled.div(
  ({ size }) => css`
    padding: 6em 1em 0 1em;
    color: ${colors.white};
    background: ${colors.black};
    overflow-y: scroll;
    height: 100vh;
  `
)

export const ProductContainer = styled.div(
  ({ mobile }) => css`
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    column-gap: 1em;
  `
)

export const ProductCardStyle = styled.div(
  ({ bg, bgImage }) => css`
    background: ${colors.basicGreen};
    margin-top: 2em;
    height: auto;
    width: 100%;
    padding: 1em;
    border-radius: 0.5em;
    transition: background 200ms ease-out;

    .image {
      text-align: center;
      height: 15em;
      img {
        height: auto;
        width: 20em;
        transition: transform 200ms ease-out;
      }
    }

    .info {
      margin-bottom: 1em;
      position: relative;

      img {
        position: absolute;
        height: 1.2em;
        width: 1.2em;
        top: 0.4em;
        left: 0.5em;
         
      }

      .name {
        background: ${colors.black};
        font-family: ${fonts.hindSiliguri};
        font-weight: 300;
        letter-spacing: 0.1em;
        padding: 0.1em 2em;
        border-radius: 0.2em;
        display: inline-flex;
        margin-bottom: 0.5em;
        font-size: ${numerics.smallFont}em;
        color: ${colors.brown};
      }

      .price {
        font-family: ${fonts.spaceMono};
        font-size: ${numerics.mediumFont}em;
        transition: 200ms ease-out;
        display: flex;
        align-items: center;
        span {
          font-size: 1.8em;
        }
      }
    }

    .actions {
      display: flex;
      justify-content: space-between;
    }

    &:hover {
      background: transparent;

      .price {
        color: ${colors.sparkGreen};
      }

      .image img {
        transform: translateY(.4em);
      }
      /* background: ${colors.darkBrown}; */
    }
  `
)

export const LandingContainer = styled.div(
  ({ bgImage }) => css`
    background-image: url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1623490557/Trapping/daniel-norin-yVNBH4sPxEI-unsplash_mr3kzq.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: hidden;
  `
)

export const Title = styled.h1(
  ({ size, color, font }) => css`
    color: ${colors.white};
    font-size: ${size || 'inherit'}em;
    font-family: ${font || 'inherit'};
  `
)

export const PageTitle = styled.h2(
  ({ font, size, color }) => css`
    color: ${colors.altWhite};
    font-family: ${fonts.spaceMono};
    border-bottom: 0.2em solid ${colors.midGreen};
    display: inline;
  `
)

export const Paragraph = styled.p(
  ({ size, font, color, bgColor, paddingX, paddingY }) => css`
    color: ${color || colors.altWhite};
    font-size: ${size || 'inherit'}em;
    background: ${bgColor || 'inherit'};
    padding: ${paddingY || 0}em ${paddingX || 0}em;
    font-family: ${font || 'inherit'};
    border-radius: 0.4em;
  `
)

export const SpanText = styled.span(
  ({ color, size }) => css`
    color: ${color || 'inherit'};
  `
)

export const Box = styled.div(
  ({ size, minimized }) => css`
    /* height: 100%; */
    height: 40rem;
    padding: 1em;
    border-radius: ${numerics.border}em;
    width: 30rem;
    box-shadow: -8px 10px 5px -5px rgba(57, 57, 57, 0.15);
    color: ${colors.white};
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
    background: ${bg || colors.lightBlack};
    padding: 1em 1.5em;
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 0.05em;
    cursor: pointer;
    font-family: ${fonts.spaceMono};
    display: inline;
    color: ${textColor || colors.brown};
    border-radius: ${numerics.border}em;
    /* border: ${numerics.border}em solid transparent; */
    transition: 250ms ease-in;

    &:hover,
    &:focus {
      background: ${colors.brown};
      outline: 0;
      color: ${colors.black};
      /* border: ${numerics.border} solid turquoise; */
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

export const Row = styled.div(
  ({ column }) => css`
    display: flex;
    justify-content: space-between;
  `
)

export const NavlinkStyle = styled.a(
  ({ color }) => css`
    text-decoration: none;
    color: ${colors.altWhite};
    font-family: ${fonts.specialElite};
    /* font-family: 'Helvetica'; */
    font-weight: 800;
    /* letter-spacing: 0.1em; */
    cursor: pointer;
    &:hover {
      color: ${colors.sparkGreen};
    }
  `
)

export const NavbarStyle = styled.nav(
  ({ size }) => css`
    height: 4.5em;
    width: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;
    /* font-family: ${fonts.charmonman}; */
    justify-content: space-between;
    color: ${colors.altWhite};
    padding: 1em;
    background: ${colors.lightBlack};
    /* background: transparent; */
    font-size: 1em;

    .logo {
    h2 {
        font-family: ${fonts.charmonman};
        font-size: 2em;
        letter-spacing: .2em;
        color: ${colors.altWhite};
      }
      span {
        /* margin-left: .2em; */
        color: ${colors.sparkGreen};
      }
      span:nth-child(2) {
        font-size: 1.5em;
      }
    }

    .navlinks {
      /* background: ${colors.basicGreen}; */
      a {
        padding: .5em;
        font-size: 1em;
        font-weight: 200;
        /* color: ${colors.altWhite}; */
      }
    }

    .userActions {
      /* background: ${colors.white}; */
      color: ${colors.midGreen};
      display: flex;
      gap: 1em;
      padding: 0 .5em;
      align-items: center;
    }
  `
)
