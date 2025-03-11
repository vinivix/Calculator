function createCalculator() {
    return {
        display: document.querySelector('.display'),
        start() {
            this.clickBtn();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.mkAcct();
                }
            });
        },
        clearDisplay() {
            this.display.value = '';
        },

        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        mkAcct() {
            let acct = this.display.value;
            try {
                acct = eval(acct).toFixed(2);

                if (!acct) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = String(acct);

            } catch (e) {
                alert('Conta invalida');
                return;
            }
        },


        clickBtn() {
            // this -> calculator
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.clearOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.mkAcct()
                }
                this.display.focus();
            });
        },

        btnToDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = createCalculator();
calculator.start();