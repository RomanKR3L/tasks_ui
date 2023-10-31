function changeCase(input) {

    const words = input.split('_');
    const firstWord = words[0].toLowerCase();
    const camelWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const camelCaseString = [firstWord, ...camelWords].join('');
    
    return camelCaseString;
}

const snakeData = 'data_in_snake_case';
const result = changeCase(snakeData);
console.log(result);