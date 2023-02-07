import { Level } from "../helpers/imc"

import upImg from '../assets/up.png'
import downImg from '../assets/down.png'

interface LevelCardProps {
  level: Level
  yourImc?: number
}

export function LevelCard({ level, yourImc }: LevelCardProps) {
  return (
    <div
      style={{ backgroundColor: level.color }}
      className="flex-1 flex flex-col items-center justify-center p-5 min-h-[300px] rounded-lg text-white md:min-h-0"
    >
      <div className="w-[70px] h-[70px] flex items-center justify-center rounded-[50%] bg-black bg-opacity-[0.1]">
        <img
          src={level.icon === 'down' ? downImg : upImg}
          alt=""
          width={30}
        />
      </div>

      <h2 className="text-xl font-bold mt-1">{level.title}</h2>
      {!yourImc ? (
        <p className="text-xs mt-3">
          IMC está entre <strong>{level.imc[0]}</strong> e <strong>{level.imc[1]}</strong>
        </p>
      ) : (
        <p className="mt-3">
          Seu IMC é de {yourImc} kg/m²
        </p>
      )}
    </div>
  )
}