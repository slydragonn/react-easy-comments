import React from 'react'
import './main.scss'

export interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className="main">{children}</main>
}

export default MainLayout
