const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            display.value = '0';
        } 
        else if (value === '=') {
            try {
                // Evaluate the expression on the display
                display.value = eval(display.value.replace('x', '*').replace('÷', '/'));
            } catch (error) {
                display.value = 'Error';
            }
        } 
        else if (value === 'Del') {
            display.value = display.value.slice(0, -1) || '0';
        } 
        else {
            if (display.value === '0') {
                display.value = value; 
            } else {
                display.value += value; 
            }
        }
    });
});
