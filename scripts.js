document.addEventListener("DOMContentLoaded", function () {
    let singBtn = document.getElementById('singBtn')

    function singNames() {
        let friends = ['Nate', 'Nick', 'Noelle', 'Roger', 'Jordan'];



        for (let a = 0; a < friends.length; a++) {
            let div1 = document.createElement('div'[a]);
            let h3 = document.createElement('h3');
            let h3text = document.createTextNode(friends[a])
            div1.className = 'friend';
            h3.appendChild(h3text);
            div1.appendChild(h3);
            document.body.appendChild(div1);

            for (let b = 99; b > 0; b--) {

                if (b === 1) {
                    let p1 = document.createElement('p');
                    let p1text = document.createTextNode(b + " line of code in file, " + b + " line of code, " + friends[a] + ", strikes one out" + ", clears it all out" + ", no more lines of code in the file");
                    p1.appendChild(p1text);
                    document.body.appendChild(p1);
                } else if (b === 2) {
                    let p2 = document.createElement('p');
                    let p2text = document.createTextNode(b + " lines of code in file, " + b + " lines of code, " + friends[a] + ", strikes one out" + ", clears it all out, " + [b - 1] + ' line of code in the file');
                    p2.appendChild(p2text);
                    document.body.appendChild(p2);

                } else {
                    let p3 = document.createElement('p');
                    let p3text = document.createTextNode(b + " lines of code in file, " + b + " lines of code, " + friends[a] + ", strikes one out" + ", clears it all out, " + [b - 1] + ' lines of code in the file');
                    p3.appendChild(p3text);
                    document.body.appendChild(p3);
                }
            }
        }

    }

    singBtn.addEventListener("click", singNames);


})