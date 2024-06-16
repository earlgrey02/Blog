// const contactVariants: Variants = {
//   initial: { opacity: 0, filter: 'blur(0.5px)' },
//   animate: {
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: {
//       duration: 1,
//       staggerChildren: 0.5,
//       delayChildren: 1.5
//     }
//   }
// }
//
// const activityVariants: Variants = {
//   initial: { opacity: 0, y: 10, filter: 'blur(0.5px)' },
//   animate: {
//     opacity: 1,
//     y: 0,
//     filter: 'blur(0px)',
//     transition: {
//       duration: 1,
//       staggerChildren: 0.5,
//       delayChildren: 3
//     }
//   }
// }
//
// const certificationVariants: Variants = {
//   initial: { opacity: 0, y: 10, filter: 'blur(0.5px)' },
//   animate: {
//     opacity: 1,
//     y: 0,
//     filter: 'blur(0px)',
//     transition: {
//       duration: 1,
//       staggerChildren: 0.5,
//       delayChildren: 4.5
//     }
//   }
// }
//
// const Page = () => {
//   const profile = getProfile()
//
//   return (
//     <div className={styles.container}>
//       <Introduction />
//       <MotionedDiv
//         className={styles.contacts}
//         variants={contactVariants}
//         initial="initial"
//         animate="animate">
//         {profile.contacts.map(contact => (
//           <MotionedDiv
//             className={styles.contact}
//             variants={contactVariants}
//             key={contact.id}>
//             <Link href={contact.link} target="_blank">
//               {contact.name}
//             </Link>
//           </MotionedDiv>
//         ))}
//       </MotionedDiv>
//       <div className={styles.spec}>
//         <div className={styles.activities}>
//           <MotionedDiv
//             className={styles.title}
//             initial={{ opacity: 0, filter: 'blur(0.8px)' }}
//             animate={{
//               opacity: 1,
//               filter: 'blur(0px)',
//               transition: { duration: 2, delay: 2.5 }
//             }}>
//             Activity
//           </MotionedDiv>
//           <MotionedDiv
//             variants={activityVariants}
//             initial="initial"
//             animate="animate">
//             {profile.activities.map(activity => (
//               <MotionedDiv
//                 className={styles.activity}
//                 variants={activityVariants}
//                 key={activity.id}>
//                 - {activity.name}
//               </MotionedDiv>
//             ))}
//           </MotionedDiv>
//         </div>
//         <div className={styles.certifications}>
//           <MotionedDiv
//             className={styles.title}
//             initial={{ opacity: 0, filter: 'blur(0.8px)' }}
//             animate={{
//               opacity: 1,
//               filter: 'blur(0px)',
//               transition: { duration: 2, delay: 4 }
//             }}>
//             Certification
//           </MotionedDiv>
//           <MotionedDiv
//             variants={certificationVariants}
//             initial="initial"
//             animate="animate">
//             {profile.certifications.map(certification => (
//               <MotionedDiv
//                 className={styles.certification}
//                 variants={certificationVariants}
//                 key={certification.id}>
//                 - {certification.name}
//               </MotionedDiv>
//             ))}
//           </MotionedDiv>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'
import { Divider, Flex, Link, List, ListItem, Text } from '@chakra-ui/react'
import Motion from '@/lib/motion/Motion'
import Image from 'next/image'
import { GitHubIcon } from '@/lib/chakra/icons'
import NextLink from 'next/link'
import { getPosts } from '@/modules/post/api'
import PostItem from '@/component/PostItem'
import { fadeIn, fadeInRight } from '@/lib/motion/animations'

const Page = () => {
  const posts = getPosts().slice(0, 3)

  return (
    <Flex flexDirection="column">
      <Motion
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}>
        <Flex
          gap={{
            base: '1.2rem',
            sm: '1.6rem'
          }}
          height={{
            base: '7rem',
            sm: '10rem'
          }}>
          <Flex position="relative" height="inherit" aspectRatio={1}>
            <Image
              src="https://avatars.githubusercontent.com/u/82157140?v=4"
              alt="earlgrey02"
              style={{ borderRadius: '0.4rem' }}
              fill
              priority
              objectFit="cover"
            />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            paddingY={{
              base: 0,
              sm: '0.4rem'
            }}>
            <Flex flexDirection="column">
              <Text
                fontSize={{
                  base: '0.8rem',
                  sm: '1rem'
                }}
                color="grayAlpha.600"
                letterSpacing="-0.02rem">
                Backend Developer
              </Text>
              <Text
                fontSize={{
                  base: '1.4rem',
                  sm: '1.8rem'
                }}
                fontWeight={800}
                lineHeight={{
                  base: '1.8rem',
                  sm: '2rem'
                }}
                letterSpacing="0.05rem">
                정상윤
              </Text>
            </Flex>
            <Flex>
              <Text
                fontSize={{
                  base: '0.8rem',
                  sm: '0.95rem'
                }}>
                그저 평범한 공대생의 개발 블로그입니다.
              </Text>
            </Flex>
            <Flex>
              <Link
                as={NextLink}
                href="https://github.com/earlgrey02"
                target="_blank">
                <GitHubIcon
                  boxSize={{
                    base: '1.6rem',
                    sm: '1.9rem'
                  }}
                />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Motion>
      <Motion
        as={Divider}
        marginY="30px"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1,
          delay: 0.3
        }}
      />
      <Motion
        as={Flex}
        justify="space-between"
        align="center"
        marginBottom="2rem"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}>
        <Text
          fontSize={{
            base: '1rem',
            sm: '1.2rem'
          }}
          fontWeight={800}>
          최근 게시글
        </Text>
        <Link as={NextLink} href="/post" _hover={{ transform: 'scale(1.02)' }}>
          <Text
            fontSize={{
              base: '0.7rem',
              sm: '0.9rem'
            }}
            color="grayAlpha.600">
            모든 게시글 보기 →
          </Text>
        </Link>
      </Motion>
      <Motion
        as={List}
        spacing={{
          base: '1.6rem',
          sm: '1.8rem'
        }}
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.5
        }}>
        {posts.map(post => (
          <Motion as={ListItem} variants={fadeInRight} key={post.id}>
            <PostItem post={post} />
          </Motion>
        ))}
      </Motion>
    </Flex>
  )
}

export default Page
