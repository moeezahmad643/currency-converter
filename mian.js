function showData() {

    // console.log('working...');
    let url = 'https://v6.exchangerate-api.com/v6/07d37a413b2807232a1a430e/latest/'
    let currency = document.getElementById('first-box').value

    // console.log(url + currency)
    fetch(url + currency).then(res => res.json())
        .then(data => {

            // console.log(data);

            function update() {

                // console.log('hello');

                for (let value in data.conversion_rates) {
                    let currency = document.getElementById('second-box').value

                    if (currency == value) {

                        let times = parseInt(document.getElementById('first').value)
                        // console.log(times);
                        document.getElementById('second').value = data.conversion_rates[currency] * times;

                    }
                }
            }
            update()
            document.getElementById('updateBtn').addEventListener('click', update)
            document.getElementById('first').addEventListener("input", update)
            document.getElementById('second').addEventListener("input", update)
        })
}
showData()

document.getElementById('first-box').addEventListener('change', showData)
document.getElementById('second-box').addEventListener('change', showData)