'use client'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store} children={children} />
}

export default ReduxProvider