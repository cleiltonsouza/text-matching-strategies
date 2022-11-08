import levenshteinDistance from './levenshtein-distance'

let values = [
    "data/updateDateTime",
    "data/personalId",
    "data/brandName",
    "data/civilName",
    "data/socialName",
    "data/cpfNumber",
    "data/number",
    "data/country"
]

let str1 = 'data/cpf';

// values.forEach(value =>{
//     console.log(levenshteinDistance(str1.toLowerCase(), value.toLowerCase()));
// })

str1 = 'data/numb';

values.forEach(value => {
    console.log(levenshteinDistance(str1.toLowerCase(), value.toLowerCase()));
})

