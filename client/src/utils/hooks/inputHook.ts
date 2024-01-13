import React, { useState } from 'react'

export function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue)

  function onChange(e: React.ChangeEvent) {
    setValue((e.target as HTMLInputElement).value)
  }

  const inputProps = {
    value,
    onChange: onChange,
  }

  return inputProps
}
