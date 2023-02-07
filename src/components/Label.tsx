import { ReactNode } from "react"

interface LabelProps {
  title: string
  children: ReactNode
}

export function Label({ title, children }: LabelProps) {
  return (
    <label className="flex-1">
      <span className="block">
        {title}
      </span>
      
      {children}
    </label>
  )
}