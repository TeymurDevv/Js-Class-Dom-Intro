class CustomMatch {
    constructor(value) {
        this.value = value;
    }

    plus(number) {
        this.value += number;
        return this;
    }

    minus(number) {
        this.value -= number;
        return this;
    }

    multiply(number) {
        this.value *= number;
        return this;
    }

    divide(number) {
        this.value /= number;
        return this;
    }

    getResult() {
        return this.value;
    }
}

function calculate(operation) {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let result;

    switch (operation) {
        case 'plus':
            result = new CustomMatch(num1).plus(num2).getResult();
            break;
        case 'minus':
            result = new CustomMatch(num1).minus(num2).getResult();
            break;
        case 'multiply':
            result = new CustomMatch(num1).multiply(num2).getResult();
            break;
        case 'divide':
            result = new CustomMatch(num1).divide(num2).getResult();
            break;
    }

    document.getElementById('result').value = result;
}

let list1 = ["c#", "js", "c++"];
let list2 = ["c#", "ruby", "go"];
let combinedList = [...new Set([...list1, ...list2])];

function renderList() {
    let ul = document.getElementById('mergedList');
    combinedList.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        ul.appendChild(li);
    });
}

renderList();