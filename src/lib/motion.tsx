'use client'
import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

const MotionedDiv = ({ children, ...props }: Props & MotionProps) => (
  <motion.div {...props}>{children}</motion.div>
)

export default MotionedDiv
