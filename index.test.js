const getBalanceByCategoryInPeriod = require('./index.js');

describe("getBalanceByCategoryInPeriod()", () => {
    const mockTransactions = [
        {
            id: 3,
            sourceAccount: 'A',
            targetAccount: 'B',
            amount: 100,
            category: 'eating_out',
            time: '2018-03-02T10:34:30.000Z'
        },
        {
            id: 1,
            sourceAccount: 'A',
            targetAccount: 'B',
            amount: 100,
            category: 'eating_out',
            time: '2018-03-02T10:33:00.000Z'
        },
        {
            id: 6,
            sourceAccount: 'A',
            targetAccount: 'C',
            amount: 250,
            category: 'other',
            time: '2018-03-02T10:33:05.000Z'
        },
        {
            id: 4,
            sourceAccount: 'A',
            targetAccount: 'B',
            amount: 100,
            category: 'eating_out',
            time: '2018-03-02T10:36:00.000Z'
        },
        {
            id: 2,
            sourceAccount: 'A',
            targetAccount: 'B',
            amount: 100,
            category: 'eating_out',
            time: '2018-03-02T10:33:50.000Z'
        },
        {
            id: 5,
            sourceAccount: 'A',
            targetAccount: 'C',
            amount: 250,
            category: 'other',
            time: '2018-03-02T10:33:00.000Z'
        }
    ];

    it("returns 0 if there are no transactions", function() {
        expect(
          getBalanceByCategoryInPeriod(
            mockTransactions,
            "groceries",
            new Date("2018-03-01"),
            new Date("2018-03-31")
        )).toEqual(0);
    });
    
    it("returns 400 if category is eating_out", function() {
        expect(
            getBalanceByCategoryInPeriod(
                mockTransactions,
                "eating_out",
                new Date("2018-03-01"),
                new Date("2018-03-31")
        )).toEqual(400);
    });
});