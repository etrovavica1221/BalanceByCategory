function getBalanceByCategoryInPeriod (transactions = [], category, start, end) {
    function isCorrectTransaction(transaction) {
        return (transaction.category === category && (new Date(transaction.time) >= start) && (new Date(transaction.time) <= end)) 
    };    

    let filterTransaction = transactions.filter(isCorrectTransaction);
    return filterTransaction.reduce((a,b)=> a + b.amount, 0); 
};

module.exports = getBalanceByCategoryInPeriod;
