import logoImg from '../assets/powered.png'

export function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[900px] mx-auto py-5 px-5 md:py-10">
        <img src={logoImg} alt="" width={160} />
      </div>
    </header>
  )
}