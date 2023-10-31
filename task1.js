const words = ["kim","powerpoint","meme","lol","u"];

function filter(array, filterFn, inplace = false) {
    if (inplace) {
        return array.filter(filterFn);
    } else {
        return array.slice().filter(filterFn);
    }
}

// Пример использования
const filteredResult = filter(words, (word) => word.length > 1, false);
console.log(filteredResult);