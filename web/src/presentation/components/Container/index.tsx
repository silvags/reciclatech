import { ReactNode } from "react"
import classes from './style.module.scss'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className={classes.div_style}>
      {children}
    </div>
  )
}