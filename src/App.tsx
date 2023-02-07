import { FormEvent, useEffect, useState } from "react";

import { levels, calculateImc, CalculateImcType } from './helpers/imc'

import arrowImg from './assets/leftarrow.png'

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { LevelCard } from "./components/LevelCard";

export function App(){ 
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [result, setResult] = useState<CalculateImcType | null>(null)  

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (result) {
      alert('Deixa de ser espertinho :V')
      return
    }

    if (!height || !weight) {
      alert('Informe todos os campos!')
      return
    }

    const calculationResult: CalculateImcType = calculateImc(height, weight)

    setResult(calculationResult)
  }

  function handleReset() {
    document.body.scrollIntoView({
      behavior: "smooth"
    })

    setResult(null)
    setHeight(0)
    setWeight(0)
  }

  useEffect(() => {
    if (result) {
      const resultElement = document.querySelector("[data-result]")      
      
      resultElement?.scrollIntoView({
        behavior: 'smooth'
      })
    }    
  }, [result])

  return (
    <>
      <Header />

      <main className="w-full">
        <div className="max-w-[900px] mx-auto p-5 flex flex-col gap-10 md:flex-row">
          <div className="md:flex-1">
            <h1 className="text-[40px] font-medium text-[#3A4B5C]">Calcule seu IMC</h1>
            <p className="mb-10 text-[#6A7D8B]">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundical de Saúde para calcular o peso ideal de casa pessoa</p>

            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <Input
                type="number"
                placeholder="165cm"
                value={height ? height : ''}
                callback={(value) => setHeight(value)}
                disabled={!!result}
              />

              <Input
                type="number"
                placeholder="60kg"
                value={weight ? weight : ''}
                callback={(value) => setWeight(value)}
                disabled={!!result}
              />

              <button
                type="submit"
                className="flex-1 bg-[#227c9d] text-white font-bold rounded-lg py-3 mt-5 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!!result}
              >
                Calcular
              </button>
            </form>
          </div>
          <div className={`flex md:flex-1`}>
            {!result ? (
              <div className="flex-1 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {levels.map(level => (
                  <LevelCard key={level.title} level={level} />
                ))}
              </div>
            ) : (
              <div data-result className="relative flex-1 flex flex-col mt-[35px] md:pl-[35px] md:mt-0">
                <button
                  className="absolute top-0 left-[50%] translate-x-[-50%] bg-[#227c9d] w-[70px] h-[70px] rounded-[50%] flex items-center justify-center md:top-[50%] md:left-0 translate-y-[-50%] md:translate-x-0 hover:opacity-90"
                  type="button"
                  onClick={handleReset}
                >
                  <img
                    className="rotate-90 md:rotate-0"
                    src={arrowImg}
                    alt=""
                    width={25}
                  />
                </button>
                <LevelCard
                  key={result.level.title}
                  level={result.level}
                  yourImc={result.imc}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}