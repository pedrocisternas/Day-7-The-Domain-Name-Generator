

window.onload = () => {
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let ext = ['.com','.net','.us','.io'];
    for (let p of pronoun) {
        //let newElement = '';
        //console.log(newElement);
        for (let a of adj) {
            for (let n of noun) {
                for (let e of ext) {
                    //let newElement = '';
                    //newElement += (p + a + n + e);
                    //console.log(newElement);
                    document.getElementById("domain").innerHTML += `<p> ${p + a + n + e} </p>`
                }
            }
        }
    }
}
//conNames(pronoun,adj,noun,ext);

