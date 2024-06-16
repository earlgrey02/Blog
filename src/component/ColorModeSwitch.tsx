'use client'
import { MoonIcon, SunIcon } from '@/lib/chakra/icons'
import { Link, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Link onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <MoonIcon boxSize={{ base: '1.8rem', sm: '2rem' }} />
      ) : (
        <SunIcon boxSize={{ base: '1.8rem', sm: '2rem' }} />
      )}
    </Link>
  )
}

export default ColorModeSwitch
