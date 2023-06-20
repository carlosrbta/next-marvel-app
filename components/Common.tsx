// Import styled-components library
import styled from "styled-components";

// Helper function to convert pixels to rems
const remy = (px: any) => `${px / 16}rem`;

// Function for calculating value for width
const getWidth = (value: any) => {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
const getFlex = (value: any) => {
  if (!value) return;

  let flex = (value / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};

export const LayoutWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;

  // Fix for applying proper box-sizing
  html:not(&) {
    box-sizing: border-box;

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body:not(&) {
    font: 16px / 1.618 Arial, Verdana, sans-serif;
  }
`;

// Grid container
export const GridContainer = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  // Breakpoint for tablets
  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  // Breakpoint for small desktops
  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  // Breakpoint for medium desktops
  @media (min-width: 992px) {
    max-width: ${remy(9600)};
  }

  // Breakpoint for large desktops and HD devices
  @media (min-width: 1200px) {
    max-width: ${remy(1140)};
  }
`;

// Grid row
export const GridRow = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`;

// Grid columns
export const GridColumn = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};

  // Columns for mobile
  ${({ xs }: any) => (xs ? getFlex(xs) : "flex: 0 0 100%")}
  ${({ xs }: any) => (xs ? getWidth(xs) : "width: 100%")}

  // Columns for tablets
  @media (min-width: 576px) {
    ${({ sm }: any) => sm && getFlex(sm)};
    ${({ sm }: any) => sm && getWidth(sm)};
  }

  // Columns for small desktops
  @media (min-width: 768px) {
    ${({ md }: any) => md && getFlex(md)};
    ${({ md }: any) => md && getWidth(md)};
  }

  // Columns for medium desktops
  @media (min-width: 992px) {
    ${({ lg }: any) => lg && getFlex(lg)};
    ${({ lg }: any) => lg && getWidth(lg)};
  }

  // Columns for large desktops and HD devices
  @media (min-width: 1200px) {
    ${({ xl }: any) => xl && getFlex(xl)};
    ${({ xl }: any) => xl && getWidth(xl)};
  }
`;
