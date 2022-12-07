export function getMonth(month){
    if (month < 1 || month > 12)
        return('Число не попадает в диапазон');
    else if (month == 12)
       return  'декабрь';
    else if (month == 1)
        return 'январь';
    else if (month == 2)
        return 'февраль';
    else if (month == 3)
        return 'март';
    else if (month == 4)
        return 'апрель';
    else if (month == 5)
        return 'май';
    else if (month == 6)
        return 'июнь';
    else if (month == 7)
        return 'июль';
    else if (month == 8)
        return 'август';
    else if (month == 9)
        return 'сентябрь';
    else if (month == 10)
        return 'октябрь';
    else if (month == 11)
        return 'ноябрь';
    else if (typeof(month) != Number)
        return 'Ошибка. Должно быть число';
}

export const repeatWord = (word = 'test', count = 3) => {
    let result = '';
    for (let i = 0; i < count; i++)
    {
        result += `${word}${i + 1}`
        if (i + 1 != count) {
            result += ', '
        }
    }
    return result;
}

export function countDown(n=3){
    let result = ''
    if (n > 0) {
        for (let i = n; i > 0 ; i--){
            result += `${i} `    
           }
    }else return 'Данные неверны';

    return result.slice(0, -1);
}