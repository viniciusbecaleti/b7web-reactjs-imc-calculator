import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  callback: (value: number) => void
}

export function Input({ callback, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      onChange={({target}) => callback(Number(target.value))}
      className="w-full border-b-2 border-b-[rgba(150, 163, 171, 0.5)] py-3 px-1 text-sm outline-none disabled:opacity-50 disabled:bg-transparent"
    />
  )
}