import React from 'react'
import { TabContainer, TabProps } from 'components'

import './Header.scss'
import { Route, Routes } from 'react-router-dom'

export function Header() {
  const tabs: TabProps[] = [
    {
      label: 'Рецепты',
      key: 'recipes',
    },
    {
      label: 'Ингредиенты',
      key: 'ingredients',
    },
    {
      label: 'Меню',
      key: 'menu',
    },
    {
      label: 'Поиск',
      key: 'search',
    },
  ]

  return (
    <div className="Header">
      <TabContainer queryParam="headerTab" tabs={tabs} />
    </div>
  )
}
