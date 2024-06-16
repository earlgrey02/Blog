'use client'
import { Button, Flex } from '@chakra-ui/react'
import { ArrowIcon, HomeIcon } from '@/lib/chakra/icons'
import ColorModeSwitch from '@/component/ColorModeSwitch'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const path = usePathname()

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginBottom="3rem">
      <Flex
        alignItems="center"
        gap={{
          base: '0.5rem',
          sm: '0.8rem'
        }}>
        {path.includes('/post/') ? (
          <Button padding={0} onClick={router.back}>
            <ArrowIcon boxSize={{ base: '2.2rem', sm: '2.4rem' }} />
          </Button>
        ) : (
          <Button padding={0} as={Link} href="/">
            <HomeIcon boxSize={{ base: '1.8rem', sm: '2rem' }} />
          </Button>
        )}
      </Flex>
      <ColorModeSwitch />
    </Flex>
  )
}

export default Header
