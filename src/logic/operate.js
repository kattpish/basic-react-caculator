export default function operate( num1, num2, operation ) {
    if( operation === '+') {
        return (num1 + num2).toString()
    }
    if (operation === '-') {
        return (num1 - num2).toString()
    }
    if (operation === 'x') {
        return (num1 * num2).toString()
    }
    if (operation === '÷') {
        return (num1 / num2).toString()
    }

}