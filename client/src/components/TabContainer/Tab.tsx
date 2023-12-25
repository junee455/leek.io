import React from 'react'

export interface TabProps {
  label: string
  onClick?: () => void
  key?: string
  active?: boolean
}

export function Tab(props: TabProps) {
  const { label, active, onClick } = props

  return (
    <div onClick={onClick} className={`Tab ${active ? 'active' : ''}`}>
      {label}
    </div>
  )
}
