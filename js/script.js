// okay let go 
const textInput = document.getElementById("text-input");
const form = document.getElementById("input-Form");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const cleanWord = (str) => {
    const regex = /[\W_]/g;  
    return str.toLowerCase().replace(regex, '');
};

// function to check if palindrome
const ifPalindrome = (str) => {
    const original = str.trim();
    const cleaned = cleanWord(original);
    const reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed) {
        result.style.display = "block";
        result.textContent = `${original} is a palindrome`;
    } else {
        result.style.display = "block";
        result.textContent = `${original} is not a palindrome`;
    }
};


// event listeners
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = textInput.value.trim();
    if (!userInput) {
        result.style.display = "block";
        return result.textContent = `please input a value`;
    }
    ifPalindrome(userInput);
});

// console.log(cleanWord("    shit     77     "));
// console.log(cleanWord("    hi        "));
// console.log(ifPalindrome("a man, a plan, a canal. panama"));
