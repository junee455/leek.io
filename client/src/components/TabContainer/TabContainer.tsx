import React, { useEffect, useState } from 'react'

import { Tab, TabProps } from './Tab'

import './TabContainer.scss'
import { useSearchParams } from 'react-router-dom'

export interface TabContainerProps {
  tabs: TabProps[]
  queryParam?: string
}

export function TabContainer(props: TabContainerProps) {
  const { tabs, queryParam = '' } = props

  const [queryParams, setQueryParams] = useSearchParams()

  const getActiveTabIndex = () => {
    return Math.min(
      Math.max(0, Number(queryParams.get(queryParam) || 0)),
      tabs.length - 1
    )
  }

  const [activeTab, setActiveTab] = useState(getActiveTabIndex())

  const onTabClick = (index: number) => {
    const newParams = new URLSearchParams(queryParams)
    setActiveTab(index)
    if (!queryParam) {
      return
    }
    newParams.set(queryParam, index.toString())
    setQueryParams(newParams)
  }

  return (
    <>
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
      {tabs[activeTab].component}
    </>
  )
}
