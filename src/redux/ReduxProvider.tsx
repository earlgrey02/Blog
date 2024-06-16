'use client'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from '@/redux/store'

interface Props {
  children: ReactNode
}

const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store} children={children} />
}

export default ReduxProvider
