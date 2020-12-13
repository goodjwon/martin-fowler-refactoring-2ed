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
        expect(statement(invoiceJson[0], playJson));
    });
})