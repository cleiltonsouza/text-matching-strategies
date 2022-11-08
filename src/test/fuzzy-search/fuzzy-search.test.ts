import FuzzySearch from "fuzzy-search";

const listKeys = [
    {
        key: "data/PERSON/socialName"
    },
    {
        key: "data/updateDateTime"
    },
    {
        key: "data/paymentDate"
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
    

    //Amount cenario
    {
        key: "data/informedAmount/amount"
    },
    {
        key: "data/informedRevenue/amount"
    }
]

describe('test fuzzy-search library', () => {

    const searcher = new FuzzySearch(listKeys, ['key'], {
        caseSensitive: false,
        sort: true //sort by best match
    });

    test('Should find the best similar results', () => {
        const valueToSearch = 'data/name'
        let result = searcher.search(valueToSearch);
        expect(result.length).toBe(4);
        expect(result[0].key).toBe('data/civilName');
        expect(result[3].key).toBe('data/PERSON/socialName');
    });
    
    test('Should get a perfect match', () => {
        const valueToSearch = 'data/brandName'
        let result = searcher.search(valueToSearch);
        expect(result.length).toBe(1);
        expect(result[0].key).toBe('data/brandName');
    });
    
    test('Should get a parcial match, ordered by best match', () => {
        const valueToSearch = 'data/date'
        let result = searcher.search(valueToSearch);
        expect(result.length).toBe(2);
        expect(result[0].key).toBe('data/updateDateTime');
        expect(result[1].key).toBe('data/paymentDate');
    });
    
    test('Should get the best match in the object deep properties', () => {
        const valueToSearch = 'amount'
        let result = searcher.search(valueToSearch);
        expect(result.length).toBe(2);
        expect(result[0].key).toBe('data/informedAmount/amount');
        expect(result[1].key).toBe('data/informedRevenue/amount');
    });
    
    test('Should get the best match inside object', () => {
        const valueToSearch = 'revenue/amount'
        let result = searcher.search(valueToSearch);
        expect(result.length).toBe(1);
        expect(result[0].key).toBe('data/informedRevenue/amount');
    });
});