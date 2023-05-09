# Analyzing Performance of Arrays and Objects

# Objects
## Unordered, Key value pairs!

```JavaScript
const student = {
    firstName: 'Jason',
    isStudent: true,
    scores: [9, 8, 25],
    classes: [
        {
            name: 'JavaScript'
        },
        {
            name: 'HTML'
        }
    ]
};
```

## When to use Objects

<ul>
    <li>
        When you don't need any ordering, Objects are an excellent choice!
    </li>
    <li>
        When you need fast access / insertion and removal
    </li>
    <li>
       Insertion -> O(1)
    </li>
    <li>
       Removal -> O(1)
    </li>
    <li>
       Searching -> O(N)
    </li>
    <li>
       Access -> O(1)
    </li>
    <li>
       Object.keys(obj) -> O(n)
    </li>
    <li>
       Object.values(obj) -> O(n)
    </li>
    <li>
       Object.entries(obj) -> O(n)
    </li>
    <li>
       Object.hasOwnProperty(key) -> O(1)
    </li>
</ul>

 

# Arrays
## Ordered lists!

```JavaScript
const names = ['Jason', 'Sarah', 'Derek'];
const values = [1, 'Hello', {}, [1,2], false];
```

### When to use Arrays

<ul>
    <li>
        When you need order
    </li>
    <li>
        When you need fast access / insertion and removal (sort of...)
    </li>
    <li>
        Access -> O(1)
    </li>
    <li>
        Searching -> O(N)
    </li>
    <li>
        Insertion -> It depends...
    </li>
    <li>
        Removal -> It depends...
    </li>
    <li>
        Array.push() -> O(1)
    </li>
    <li>
        Array.pop() -> O(1)
    </li>
    <li>
        Array.shift() -> O(N)
    </li>
    <li>
        Array.unshift() -> O(N)
    </li>
    <li>
        Array.concat() -> O(N)
    </li>
    <li>
        Array.slice() -> O(N)
    </li>
    <li>
        Array.splice() -> O(N)
    </li>
    <li>
        Array.forEach/map/filter/reduce/indexOf/etc() -> O(N)
    </li>
    <li>
        Array.sort() -> O(N * log N)
    </li>
</ul>
