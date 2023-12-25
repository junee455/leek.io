export interface CssVar {
  name: string
  value?: string | number
}

export const cssVarNames = [
  'background-color',
  'foreground-color',
  'input-background-color',
]

export const CssVars: CssVar[] = cssVarNames.map((name) => ({ name }) as CssVar)
