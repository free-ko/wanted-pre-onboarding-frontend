type BrakePointTypes = (typeof BREAK_POINT)[keyof typeof BREAK_POINT];
const maxWidthQuery = (breakPoint: BrakePointTypes) => `(max-width: ${breakPoint}px)`;

export const mediaQuery = (breakPoint: BrakePointTypes) => `@media ${maxWidthQuery(breakPoint)}`;

export const BREAK_POINT = {
  pc: 1024,
  tablet: 1023,
  mobile: 768,
} as const;
