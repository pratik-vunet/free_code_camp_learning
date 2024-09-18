import { wordList } from './words';

class PasswordGenerator {
passwordLength: number;

constructor(length: number) {
this.passwordLength = length;
}

generatePassword(): string {
let password = '';

for (let i = 0; i < this.passwordLength; i++) {
password += this.generateRandomCharacter();
}

return password;
}

generateRandomCharacter(): string {
const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const randomCharacter = this.getRandomItem(characters);

if (Math.random() > 0.5) {
return randomCharacter.toUpperCase();
}

return randomCharacter;
}

getRandomItem(array: string[]): string {
const randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex];
}
}
class ReadablePasswordGenerator extends PasswordGenerator {
private generateRandomWord(): string {
return this.getRandomItem(wordList);
}
public generatePassword(): string {
let password = '';
while (password.length < this.passwordLength + 1) {
password += this.generateRandomWord() + '-';
}
password = password.slice(0, -1);
return password;
}
}

const myReadablePasswordGenerator = new ReadablePasswordGenerator(15);
const readablePassword = myReadablePasswordGenerator.generatePassword();

console.log(`Generated Readable password:
${readablePassword}`

);

const myNonReadablePasswordGenerator = new PasswordGenerator(10)
const nonReadablePassword = myNonReadablePasswordGenerator.generatePassword()
console.log(
`Generated NON Readable password:
${nonReadablePassword}`
);