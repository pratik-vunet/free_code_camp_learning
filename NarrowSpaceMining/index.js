function isItem(item) {
    return item != null;
}
var Mine = /** @class */ (function () {
    function Mine() {
        this.invalidCount = 0;
        this.possible = [
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
        this.count = Math.floor(Math.random() * 10);
    }
    Mine.prototype.dig = function () {
        if (this.count === this.invalidCount || Math.random() > 0.5) {
            return null;
        }
        this.count--;
        return this.possible[Math.floor(Math.random() * this.possible.length)];
    };
    Mine.prototype.isEmpty = function () {
        return this.count === this.invalidCount;
    };
    return Mine;
}());
var mine = new Mine();
if (String(mine.isEmpty()) === "true")
    console.log("No hopes for mining");
while (!mine.isEmpty()) {
    var find = mine.dig();
    if (isItem(find)) {
        console.log("found ".concat(find.kind));
    }
    else {
        console.log("found nothing");
    }
}
