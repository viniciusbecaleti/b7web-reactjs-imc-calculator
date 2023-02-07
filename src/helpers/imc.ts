export interface Level {
  title: string
  color: string
  icon: 'down' | 'up',
  imc: number[]
}

export const levels: Level[] = [
  { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#E2B036', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },
]

export type CalculateImcType = {
  level: Level;
  imc: number;
} | null

export function calculateImc(height: number, width: number): CalculateImcType {
  const imc = Number((width / ((height / 100) * (height / 100))).toFixed(1))  

  for (const level of levels) {
    if (imc <= 0) {
      alert('Valor inválido!')
      return null
    }

    if (imc >= level.imc[0] && imc <= level.imc[1]) {
      return { level, imc }
    }
  }

  return null
}