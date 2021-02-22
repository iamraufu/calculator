document.getElementById('containers').innerHTML = `
<div class="input-field">
            <input type="number" id="input">
        </div>

        <div class="btn">

            <div class="operators">
                <button id="cancel" onclick="calculate()" class="light-color">C</button>
                <button id="toggle" onclick="calculate()" class="light-color">+/-</button>
                <button id="mod" onclick="calculate()" class="light-color">%</button>
                <button id="division" onclick="calculate()" class="orange">÷</button>
            </div>

            <div class="level-1">
                <button id="seven" onclick="calculate(this.value)" class="dark-color">7</button>
                <button id="eight" onclick="calculate(this.value)" class="dark-color">8</button>
                <button id="nine" onclick="calculate(this.value)" class="dark-color">9</button>
                <button id="multiplication" onclick="calculate()" class="orange">x</button>
            </div>

            <div class="level-2">
                <button id="four" onclick="calculate(this.value)" class="dark-color">4</button>
                <button id="five" onclick="calculate(this.value)" class="dark-color">5</button>
                <button id="six" onclick="calculate(this.value)" class="dark-color">6</button>
                <button id="negative" onclick="calculate()" class="orange">-</button>
            </div>

            <div class="level-3">
                <button id="one" onclick="calculate(this.value)" class="dark-color">1</button>
                <button id="two" onclick="calculate(this.value)" class="dark-color">2</button>
                <button id="three" onclick="calculate(this.value)" class="dark-color">3</button>
                <button id="addition" onclick="calculate(this.value)" class="orange">+</button>
            </div>

            <div class="level-4">
                <button id="zero" onclick="calculate(this.value)" class="dark-color">0</button>
                <button id="dot" onclick="calculate()" class="dark-color">.</button>
                <button id="equal" onclick="calculate()" class="orange">=</button>
            </div>
        </div>
`;