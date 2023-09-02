document.addEventListener("DOMContentLoaded", function () {
    let singBtn = document.getElementById('singBtn')

    function singNames() {
        let friends = ['Matt', 'Nick', 'Noelle', 'Roger', 'Jordan'];

        for (let a = 0; a < friends.length; a++) {
            console.log(friends[a]);
            for (let b = 99; b > 0; b--) {

                if (b === 1) {
                    console.log(b + " line of code in file, " + b + " line of code, " + friends[a] + ", strikes one out" + ", clears it all out" + ", no more lines of code in the file");
                } else if (b === 2) {
                    console.log(b + " lines of code in file, " + b + " lines of code, " + friends[a] + ", strikes one out" + ", clears it all out, " + [b - 1] + ' line of code in the file');
                } else {
                    console.log(b + " lines of code in file, " + b + " lines of code, " + friends[a] + ", strikes one out" + ", clears it all out, " + [b - 1] + ' lines of code in the file');
                }
            }
        }
    }

    singBtn.addEventListener("click", singNames);
})