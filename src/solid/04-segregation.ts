interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RuningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public eat() {}
    public fly() {
        return 200;
    }
}

class Humminbird implements Bird, FlyingBird {
    public eat() {}
    public fly() {
        return 500;
    }
}

class Ostrich implements Bird, RuningBird {
    public eat() {}
    public run() {}
}

class Penguin implements Bird, SwimmerBird {
    public eat() {}
    public swim() {}
}
