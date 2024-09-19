type Item = {
    kind: string;
}
type Diggable = Item | null;
function isItem(item: Diggable): boolean {
    return item != null
}
class Mine {
    invalidCount: number = 0;
    readonly possible = [
        {
            kind: 'rock',
        },
        {
            kind: 'iron',
            value: 10,
        },
        {
            kind: 'gold',
            value: 20,
        },
        {
            kind: 'platinum',
            value: 30,
        },
    ];
    count: number;
    constructor() {

        this.count = Math.floor(Math.random() * 10);
    }

    dig(): Diggable {
        if (this.count === this.invalidCount || Math.random() > 0.5) {
            return null;
        }
        this.count--;
        return this.possible[Math.floor(Math.random() * this.possible.length)] as Item;
    }

    isEmpty(): boolean {
        return this.count === this.invalidCount;
    }
}

const mine = new Mine()
if (String(mine.isEmpty()) === "true")
    console.log("No hopes for mining")
while (!mine.isEmpty()) {
    const find = mine.dig()
    if (isItem(find)) {
        console.log(`found ${find.kind}`)
    }
    else {
        console.log("found nothing");
    }
}
