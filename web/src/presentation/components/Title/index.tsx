import { ReactNode } from "react"
import { FaCaretDown, FaCaretRight } from "react-icons/fa"
import classes from './style.module.scss'

interface ButtonProps {
  style: 'first' | 'second'
  children: ReactNode
}

export function Title({ style, children }: ButtonProps) {
  return (
    <div className={style === 'first' ? classes.first_style : classes.second_style}>
      {children}
      {style === 'first' ? (
        <FaCaretRight />
      ) : (
        <FaCaretDown />
      )}
    </div>
  )
}