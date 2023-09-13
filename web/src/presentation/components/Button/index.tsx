import { ReactNode } from "react"
import classes from './style.module.scss'
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps {
  children: ReactNode
  href?: string
  asChild?: boolean
}

export function Button({ href, children, asChild }: ButtonProps) {
  const Component = asChild === true ? Slot : Link

  return (
    <Component href={href as string} className={classes.btn_style}>
      {children}
    </Component>
  )
}