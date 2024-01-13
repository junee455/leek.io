import React, { useEffect } from 'react'

import './FormBuilder.scss'

export interface FormBuilderProps<T> {
  data: Partial<T>
  onChange?: (key: keyof T, value: T[typeof key] | any) => void
  onSubmit?: () => void
  onError?: () => void
  validators?: any[]
}

export function FormBuilder<T>(props: FormBuilderProps<T>) {
  const renderFormFields = () => {
    return (
      <>
        {(Object.keys(props.data as Object) as (keyof T)[]).map((key) => (
          <>
            <div>{key as string}</div>
            <input
              defaultValue={props.data[key] as any as string}
              type="text"
            />
          </>
        ))}
      </>
    )
  }

  return <div className="FormBuilder">{renderFormFields()}</div>
}

export function useFormBuilder<T>(keys: (keyof T)[]) {
  return keys;
}