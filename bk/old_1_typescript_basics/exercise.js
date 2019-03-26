"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'aron',
    bankAccount: bankAccount,
    hobbies: ['sports', 'reading']
};
myself.bankAccount.deposit(3000);
console.log(myself);
