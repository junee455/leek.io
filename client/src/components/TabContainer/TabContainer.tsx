import React, { useEffect } from 'react'

import { Tab, TabProps } from './Tab'

import './TabContainer.scss'
import { useSearchParams } from 'react-router-dom'

export interface TabContainerProps {
  tabs: TabProps[]
  queryParam?: string
}

export function TabContainer(props: TabContainerProps) {
  const { tabs, queryParam = 'tab' } = props

  const [queryParams, setQueryParams] = useSearchParams()

  const activeTab = Number(queryParams.get(queryParam) || 0)

  const onTabClick = (index: number) => {
    const newParams = new URLSearchParams(queryParams)
    newParams.set(queryParam, index.toString())
    setQueryParams(newParams)
  }

  return (
    <div className="TabsContainer">
      {tabs.map((tabProps, i) => {
        const key = tabProps.key || Math.random().toString()
        return (
          <Tab
            onClick={() => onTabClick(i)}
            active={activeTab == i}
            {...tabProps}
            key={key}
          />
        )
      })}
    </div>
  )
}
