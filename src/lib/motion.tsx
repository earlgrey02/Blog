'use client'
import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

type MotionedProps = {
  children?: ReactNode
  className?: string
} & MotionProps

const MotionedDiv = ({ children, ...props }: MotionedProps) => (
  <motion.div {...props}>{children}</motion.div>
)

export default MotionedDiv
