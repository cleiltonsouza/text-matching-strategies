import FuzzySet from 'fuzzyset.js';

const listKeys = [
    "data/PERSON/socialName",
    "data/updateDateTime",
    "data/paymentDate",
    "data/personalId",
    "data/civilName",
    "data/socialName",
    "data/brandName",
    "data/cpfNumber",
    "data/number",
    "data/informedAmount/amount",
    "data/informedRevenue/amount"
]

describe('test FuzzySet library', () => {
    const fuzzySet = FuzzySet(listKeys,false)

    test('Should find the best similar results', () => {
        const valueToSearch = 'data/Name'

        let result = fuzzySet.get(valueToSearch, null, 0.6) || [];

        // console.log(result)

        expect(result).toHaveLength(3)
        expect(result[0][1]).toBe('data/brandName');
        expect(result[1][1]).toBe('data/civilName');
        expect(result[2][1]).toBe('data/socialName');
    });

    test('Should get a perfect match', () => {
        const valueToSearch = 'data/brandName'
        let result = fuzzySet.get(valueToSearch, null) || []; 
        expect(result[0][1]).toBe('data/brandName');
        expect(result[0][0]).toBeGreaterThanOrEqual(1)
    });

    test('Should get a parcial match, ordered by best match', () => {
        const valueToSearch = 'data/date'
        let result = fuzzySet.get(valueToSearch, null) || []; 
        // console.log(result)
        expect(result[0][1]).toBe('data/updateDateTime');
        expect(result[1][1]).toBe('data/paymentDate');
    });

    test('Should get the best match in the object deep properties', () => {
        const valueToSearch = 'data/amount'
        let result = fuzzySet.get(valueToSearch, null) || []; 

        // console.log(result)

        expect(result.length).toBe(2);
        expect(result[0][1]).toBe('data/informedAmount/amount');
        expect(result[1][1]).toBe('data/informedRevenue/amount');
    });

    test('Should get the best match inside object', () => {
        const valueToSearch = 'revenue/amount'
        let result =  fuzzySet.get(valueToSearch, null) || []; 
      
        // console.log(result)

        expect(result[0][1]).toBe('data/informedRevenue/amount');
    });
});