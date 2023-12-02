/**
 * It is important to bind the object of breakpoints to a variable for memoization to work correctly.
 * If they are created dynamically, try using the `useMemo` hook.
 */
export const BREAKPOINTS = { mobile: 0, tablet: 640, desktop: 1024 };
