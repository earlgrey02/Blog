'use client'
import { ChakraProvider as ChakraOriginProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import theme from '@/lib/chakra/theme'

interface Props {
  children: ReactNode
}

const ChakraProvider = ({ children }: Props) => {
  return <ChakraOriginProvider children={children} theme={theme} />
}

export default ChakraProvider
