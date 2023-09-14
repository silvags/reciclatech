import { CSSProperties, ReactNode } from "react"
import classes from './style.module.scss'
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps {
  children: ReactNode
  href?: string
  asChild?: boolean
  css?: CSSProperties
}

export function Button({ href, children, css, asChild }: ButtonProps) {
  const Component = asChild === true ? Slot : Link

  return (
    <Component style={css} href={href as string} className={classes.btn_style}>
      {children}
    </Component>
  )
}