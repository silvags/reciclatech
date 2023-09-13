import { CSSProperties, InputHTMLAttributes, ReactNode } from "react"
import classes from './style.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
  icon?: ReactNode
  css?: CSSProperties
}

export function Input({ icon, css, ...props }: InputProps) {
  return (
    <div style={css} className={classes.div_style}>
      {icon && (
        <span>
          {icon}
        </span>
      )}
      <input {...props} />
    </div>
  )
}