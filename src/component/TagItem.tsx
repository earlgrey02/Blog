import { Text } from '@chakra-ui/react'

interface Props {
  tag: string
}

const TagItem = ({ tag }: Props) => {
  return (
    <Text
      paddingX={{
        base: '0.35rem',
        sm: '0.45rem'
      }}
      paddingY={{
        base: '0.32rem',
        sm: '0.4rem'
      }}
      borderRadius="0.2rem"
      backgroundColor="grayAlpha.200"
      fontSize={{
        base: '0.6rem',
        sm: '0.7rem'
      }}
      textAlign="center">
      {tag}
    </Text>
  )
}

export default TagItem
