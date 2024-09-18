"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var words_1 = require("./words");
var PasswordGenerator = /** @class */ (function () {
    function PasswordGenerator(length) {
        this.passwordLength = length;
    }
    PasswordGenerator.prototype.generatePassword = function () {
        var password = '';
        for (var i = 0; i < this.passwordLength; i++) {
            password += this.generateRandomCharacter();
        }
        return password;
    };
    PasswordGenerator.prototype.generateRandomCharacter = function () {
        var characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        var randomCharacter = this.getRandomItem(characters);
        if (Math.random() > 0.5) {
            return randomCharacter.toUpperCase();
        }
        return randomCharacter;
    };
    PasswordGenerator.prototype.getRandomItem = function (array) {
        var randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };
    return PasswordGenerator;
}());
var ReadablePasswordGenerator = /** @class */ (function (_super) {
    __extends(ReadablePasswordGenerator, _super);
    function ReadablePasswordGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReadablePasswordGenerator.prototype.generateRandomWord = function () {
        return this.getRandomItem(words_1.wordList);
    };
    ReadablePasswordGenerator.prototype.generatePassword = function () {
        var password = '';
        while (password.length < this.passwordLength + 1) {
            password += this.generateRandomWord() + '-';
        }
        password = password.slice(0, -1);
        return password;
    };
    return ReadablePasswordGenerator;
}(PasswordGenerator));
var myReadablePasswordGenerator = new ReadablePasswordGenerator(15);
var readablePassword = myReadablePasswordGenerator.generatePassword();
console.log("Generated Readable password:\n".concat(readablePassword));
var myNonReadablePasswordGenerator = new PasswordGenerator(10);
var nonReadablePassword = myNonReadablePasswordGenerator.generatePassword();
console.log("Generated NON Readable password:\n".concat(nonReadablePassword));
