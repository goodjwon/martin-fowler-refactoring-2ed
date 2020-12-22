export {statement}

function statement(invoice, plays) {
    let result = `청구내역: (고객명: ${invoice.customer}\n`;
    for (let perf of invoice.performances) {
        // 청구내역을 출력한다.
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} 석)\n`;
    }
    result += `총액: ${usd(totalAmount())}\n`;
    result += `적립포인트: ${totalVolumeCredits()}점\n`;

    return result;

    function totalAmount(){
        let result = 0;
        for (let perf of invoice.performances) {
            result += amountFor(perf);
        }
        return result;
    }

    function totalVolumeCredits(){
        let result = 0;
        for(let perf of invoice.performances){
            result +=volumeCreatesFor(perf)
        }
        return result;
    }

    function usd(aNumber){
        return new Intl.NumberFormat("en-US",
            {
                style: "currency", currency: "USD",
                minimumFraction: "Digits: 2"
            }).format(aNumber/100)
    }

    function volumeCreatesFor(perf) {
        let volumeCredits = 0;
        volumeCredits += Math.max(perf.audience - 30, 0);
        if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

        return volumeCredits;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;
        switch (playFor(aPerformance).type) {
            case "tragedy": //비극
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`알수 없는 장르: ${playFor(aPerformance).type}`);
        }
        return result;
    }
}


