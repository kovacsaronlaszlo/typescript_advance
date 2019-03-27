class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('alma', 10);
numberMap.setItem('körte', 2);
console.log(numberMap.getItem('alma'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('alma', '10');
stringMap.setItem('körte', '2');
console.log(stringMap.getItem('alma'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();