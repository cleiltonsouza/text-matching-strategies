import FuzzySearch from 'fuzzy-search'; // Or: var FuzzySearch = require('fuzzy-search');

const listKeys = [
    {
        key: "data/PERSON/socialName"
    },
    {
        key: "data/updateDateTime"
    },
    {
        key: "data/personalId"
    },
    {
        key: "data/civilName"
    },
    {
        key: "data/socialName"
    },
    {
        key: "data/brandName"
    },
    {
        key: "data/cpfNumber"
    },
    {
        key: "data/number"
    },
    {
        key: "data/timebox"
    },

    //Amount cenario
    {
        key: "data/informedAmount/amount"
    },
    {
        key: "data/informedRevenue/amount"
    }
]

const searcher = new FuzzySearch(listKeys, ['key'], {
    caseSensitive: false,
    sort: true //sort by best match
});

// mais de um match:
let result = searcher.search('data/name');
console.log("SIMILARES MAIS PROXIMAS:", result)

// match perfeito:
result = searcher.search("data/brandName");
console.log("PERFECT MATCH:", result)

// parcial match com melhor resultado
result = searcher.search("data/DateTime");
console.log("PARCIAL MATCH:", result)



// Amount case
result = searcher.search("revenue/AMOUNT");
console.log("AMOUNT CASE:", result)
result = searcher.search("AMOUNT");
console.log("AMOUNT CASE 2:", result)