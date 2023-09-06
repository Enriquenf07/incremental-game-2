import { formatNumber } from "../../../helper/formatNumber";
import useStore from "../../../store/useStore";
import ModalView from "../../layout/Modal/ModalView";
import {useEffect, useState} from 'react'

export default function BossView(){
    const [isFighting, setIsFighting] = useStore(state => [state.isFighting, state.setIsFighting])
    const [boss, setBoss] = useStore(state => [state.boss, state.setBoss])
    const [name, setName] = useState('')
    const [health, power, speed, precision] = useStore(state => [state.health, state.power, state.speed, state.precision])
    const [setHealth, setPower, setSpeed, setPrecision] = useStore(state => [state.setHealth, state.setPower, state.setSpeed, state.setPrecision])
    const [result, setResult] = useState('')

    useEffect(() => {
        if (boss == 0){
            setName('Tutorial Boss')
        }
        if (boss > 0){
            setName('boss ' + boss)
        }
        const myPower = (health + power + speed + precision) / 4
        const bossPower = (((((boss + 1) * 2000) * 10) + ((((boss + 1) * 1000) * 10) * 3)) / 4)
        const result = myPower/bossPower
        if (result > 2){
            setResult('100%')
            return
        }
        if (result > 1){
            setResult('2/3')
            return
        }
        if (result > 0.8){
            setResult('1/3')
            return
        }
        if (result > 0.6){
            setResult('1/4')
            return
        }
        if (result > 0.4){
            setResult('1/5')
            return
        }
        if (result > 0.2){
            setResult('1/6')
            return
        }
        setResult('1/100')

    }, [health, power, speed, precision, boss])

    function calcWinner(){
        const myPower = (health + power + speed + precision) / 4
        const bossPower = (((((boss + 1) * 2000) * 10) + ((((boss + 1) * 1000) * 10) * 3)) / 4)
        const result = myPower/bossPower
        if (result > 2){
            fightFunc(1, 1)
            return
        }
        if (result > 1){
            fightFunc(2, 3)
            return
        }
        if (result > 0.8){
            fightFunc(1, 3)
            return
        }
        if (result > 0.6){
            fightFunc(1, 4)
            return
        }
        if (result > 0.4){
            fightFunc(1, 5)
            return
        }
        if (result > 0.2){
            fightFunc(1, 6)
            return
        }
        fightFunc(1, 100)
        return
    }
    
    function fightFunc(a : number, b: number){
        const randomNumber = Math.floor(Math.random() * (b - 1 + 1)) + 1;
        if (randomNumber > a){
            setHealth(0)
            setPower(0)
            setSpeed(0)
            setPrecision(0)
            return
        }
        setBoss(boss + 1)
    }

    return(
        <>
            <ModalView>
                <section className="flex flex-col items-center flex-wrap py-5 justify-center">
                    <div>
                        <p className="text-red-500 font-medium text-lg">Health: {formatNumber(health)}</p>
                        <p className="text-green-300 font-medium text-lg">Power: {formatNumber(power)}</p>
                        <p className="text-blue-300 font-medium text-lg">Speed: {formatNumber(speed)}</p>
                        <p className="text-yellow-300 font-medium text-lg">Precision: {formatNumber(precision)}</p>
                    </div>
                </section>
            </ModalView>
            <ModalView>
                <section className="flex items-center flex-col gap-10 py-4 justify-center">
                    <div className="flex gap-2 justify-center items-center">
                        <p className="text-center bg-red-300 text-zinc-900 rounded-lg p-1 px-4 text-lg font-medium font-mono"> {name} </p>
                    </div>
                    <div>
                        <p className="text-red-500 font-medium text-lg">Health: {formatNumber(((boss + 1) * 2000) * 10)}</p>
                        <p className="text-green-300 font-medium text-lg">Power: {formatNumber(((boss + 1) * 1000) * 10)}</p>
                        <p className="text-blue-300 font-medium text-lg">Speed: {formatNumber(((boss + 1) * 1000) * 10)}</p>
                        <p className="text-yellow-300 font-medium text-lg">Precision: {formatNumber(((boss + 1) * 1000) * 10)}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button className="bg-red-700 rounded-xl px-4 py-2" onClick={() => calcWinner()}>
                            fight
                        </button>
                        <div>
                            <h2 className="text-sm text-center text-green-400">You have a {result} chance to win</h2>
                        </div>
                    </div>
                    
                </section>
            </ModalView>
        </>

    )
}