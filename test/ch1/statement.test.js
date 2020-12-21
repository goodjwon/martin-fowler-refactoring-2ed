import { expect } from 'chai';
import {statement} from '../../src/ch1/statement';

describe('statement', () => {
    let playJson = {
        "hamlet": {"name": "Hamlet", "type": "tragedy"},
        "as-like": {"name": "As You Like It", "type": "comedy"},
        "othello": {"name": "Othello", "type": "tragedy"}
    };

    let invoiceJson = [
        {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
    ];

    it('should print a statement for multiple plays, single customer and mutiple sets in plain text',  () => {
        console.log(statement(invoiceJson[0], playJson))
        expect(statement(invoiceJson[0], playJson)).to.equal('청구내역: (고객명: BigCo\n' +
            ' Hamlet: $650.00 (55 석)\n' +
            ' As You Like It: $580.00 (35 석)\n' +
            ' Othello: $500.00 (40 석)\n' +
            '총액: $1,730.00\n' +
            '적립포인트: 47점\n');
    });
})