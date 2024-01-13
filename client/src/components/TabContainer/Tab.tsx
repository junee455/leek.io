import React from 'react'

export interface TabProps {
  label: string
  onClick?: () => void
  key?: string
  active?: boolean
  component?: React.ReactNode | null
}

export function Tab(props: TabProps) {
  const { label, active, onClick, component = null } = props

  return (
    <div onClick={onClick} className={`Tab ${active ? 'active' : ''}`}>
      {label}
    </div>
  )
}
