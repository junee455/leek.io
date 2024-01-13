import React from 'react'
import { Login, TabContainer, TabProps } from 'components'

import { Ingredients, Recipes } from 'components/Pages';

import './Header.scss'
import { Route, Routes } from 'react-router-dom'

export function Header() {
  const tabs: TabProps[] = [
    {
      label: 'Рецепты',
      key: 'recipes',
      component: <Recipes />
    },
    {
      label: 'Ингредиенты',
      key: 'ingredients',
      component: <Ingredients />
    },
    {
      label: 'Меню',
      key: 'menu',
      component: <div>menu</div>
    },
    {
      label: 'Поиск',
      key: 'search',
      component: <div>search</div>
    },
    {
      label: 'Логин',
      key: 'login',
      component: <Login />
    }
  ]

  return (
    <div className="Header">
      <TabContainer queryParam="headerTab" tabs={tabs} />
    </div>
  )
}
