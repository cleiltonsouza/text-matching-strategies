import Fuse from 'fuse.js'

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
        key: "data/country"
    },

    //Amount cenario
    {
        key: "data/informedAmount/amount"
    },
    {
        key: "data/informedRevenue/amount"
    }
]

const options = {
    // isCaseSensitive: false,
    //  includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    minMatchCharLength: 4,
    // location: 0,
    threshold: 0.3,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    ignoreLocation: true,
    // ignoreFieldNorm: false,
    ignoreFieldNorm: true,
    // fieldNormWeight: 1,
    keys: [
        "key"
    ]
};

const fuse = new Fuse(listKeys, options);


// mais de um match:
let result = fuse.search('data/name');
console.log("SIMILARES MAIS PROXIMAS:", result) // ITS NOT OK

// match perfeito:
result = fuse.search("data/brandName");
console.log("PERFECT MATCH:", result)

// parcial match com melhor resultado
result = fuse.search("updateDateTime");
console.log("PARCIAL MATCH:", result)

// Amount case
result = fuse.search("revenue/AMOUNT");
console.log("AMOUNT CASE:", result)
result = fuse.search("AMOUNT");
console.log("AMOUNT CASE 2:", result)