//menetapkan variabel calculatorScreen
const calculatorScreen = document.querySelector('.calculator-screen');
//Fungsi untuk menampilkan angka yang di tekan dan hasil perhitungan
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

//menetapkan variabel numbers
const numbers = document.querySelectorAll(".number");

//fungsi ketika angka ditekan
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber)
    })
})

//menetapkan variabel 
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let hasil = '';


//fungsi yang menetapkan angka yang ditekan
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else if (currentNumber === hasil) {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}


//menetapkan variabel operators
const operators = document.querySelectorAll('.operator');

//fungsi ketika operator di tekan
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

//fungsi yang menggantikan currentNumber menjadi value dari operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

//menetapkan variabel = dari elemen dengan kelas "equal-sign" 
const equalSign = document.querySelector('.equal-sign');

//memberikan event/task ketika tombol = ditekan
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(hasil);
})

//fungsi hitung
const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case 'x':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    hasil = result;
    currentNumber = hasil;
    calculationOperator = '';
}

let ubah = ''
const balik = document.querySelector('.negative');
balik.addEventListener('click', (event) => {
    neg();

    updateScreen(ubah);
})

const neg = () => {
        ubah = currentNumber * -1;
        currentNumber = ubah;
    }
    //menetapkan variabel hapus 
const clearBtn = document.querySelector('.all-clear');

//fungsi ketika tombol AC di tekan
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

//fungsi untuk hapul semua nilai 
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

//menetapkan variabel decimal
const decimal = document.querySelector('.decimal');

//fungsi yang dijalankan ketika tombol . di tekan
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber);
})


//fungsi hitungan .
inputDecimal = (dot) => {

    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}