import React, { useMemo, useState } from 'react'

import { CssVars, CssVar, cssVarNames } from './cssVars'

import './ThemeEditor.scss'

function readCssVars() {
  const currentStyle = window.getComputedStyle(document.body)
  return CssVars.map((cssVar) => {
    const value = currentStyle.getPropertyValue(`--${cssVar.name}`)
    return {
      name: cssVar.name,
      value,
    } as CssVar
  })
}

type CssVarName = (typeof cssVarNames)[number]

type ThemeChanges = {
  [key: CssVarName]: string | number | undefined
}

export function ThemeEditor() {
  const initialTheme = useMemo(() => {
    console.log('rewrite')
    return readCssVars()
  }, [])

  const [themeChanges, setThemeChanges] = useState<ThemeChanges>({})

  const updateVarValue = (name: CssVarName) => {
    if (themeChanges[name]) {
      console.log(typeof themeChanges[name])
      document.body.style.setProperty(`--${name}`, String(themeChanges[name]))

      setThemeChanges((p) => ({
        ...p,
        [name]: undefined,
      }))
    }
  }

  const onInput = (name: CssVarName, newValue: string | number) => {
    setThemeChanges({
      ...themeChanges,
      [name]: newValue,
    })
  }

  const revertValue = (name: CssVarName) => {
    setThemeChanges((p) => ({
      ...p,
      [name]: undefined,
    }))
  }

  const getDisplayValue = (cssVar: CssVar) => {
    return themeChanges[cssVar.name] === undefined
      ? cssVar.value
      : themeChanges[cssVar.name]
  }

  const revertAll = () => {
    setThemeChanges((p) => {
      const ret = { ...p }
      Object.keys(ret).forEach((key) => (ret[key] = undefined))
      return ret
    })
  }

  const saveAll = () => {
    Object.keys(themeChanges).forEach((key) => {
      if (themeChanges[key] !== undefined) {
        document.body.style.setProperty(`--${key}`, String(themeChanges[key]))
      }
    })
  }

  const hasChanges = () => {
    for (let key of Object.keys(themeChanges)) {
      if (themeChanges[key] !== undefined) {
        return true
      }
    }

    return false
  }

  return (
    <div className="ThemeEditor">
      <h3>theme editor</h3>
      <div className="inputsContainer">
        {initialTheme.map((cssVar) => (
          <React.Fragment key={cssVar.name}>
            <div>{cssVar.name}</div>
            <input
              value={getDisplayValue(cssVar)}
              onChange={(ev) => onInput(cssVar.name, ev.target.value)}
            />
            <button
              className={
                themeChanges[cssVar.name] !== undefined ? '' : 'hidden'
              }
              onClick={() => revertValue(cssVar.name)}
            >
              revert
            </button>
          </React.Fragment>
        ))}
      </div>
      <button className={hasChanges() ? '' : 'hidden'} onClick={saveAll}>
        save
      </button>
      <button className={hasChanges() ? '' : 'hidden'} onClick={revertAll}>
        revert all
      </button>
    </div>
  )
}
