import operate from './operate'
import isNumber from './isNumber'

export default function calculate(obj, buttonName) {
    if( buttonName === 'AC' ) {
        return{
            next: null,
            total: null,
        }
    }

    if (buttonName === '+/-') {
        return {
            next: -1 * obj.next,
            total: null,
        }
    }

    if( buttonName === '%' ) {
        return {
            next: 0.01 * obj.next,
            total: null,
        }
    }

    if (buttonName === '.') {
        return {
            next: obj.next + '.',
            total: null,
        }
    }

    if(isNumber(buttonName)) {
        if(obj.operation){
            if(obj.next) {
                return {
                    total: operate(obj.next, buttonName, obj.operation)
                }
            }
            return {
                next: buttonName
            }
        }
        if(obj.next){
            return {
                next: obj.next + buttonName,
                total: null,
            }
        }
        return{
            next: buttonName,
            total: null,
        }
    }

    if (buttonName === '+' || buttonName === '-' || buttonName === 'x' || buttonName === '÷') {
        return {
            operation: buttonName,
        }
    }

    if(buttonName === '=') {
        return {
            next: obj.total,
            total: null,
        }
    }
}