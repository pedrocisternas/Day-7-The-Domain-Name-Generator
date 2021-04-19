let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com','.net','.us','.io'];

let conNames = (a1,a2,a3,a4) => {
    let newArray = []
    for (let p of pronoun) {
        //let newElement = '';
        //console.log(newElement);
        for (let a of adj) {
            for (let n of noun) {
                for (let e of ext) {
                    let newElement = '';
                    newElement += (p + a + n + e);
                    console.log(newElement);
                    //newArray.push(newElement);
                }
            }
        }
    }
    //console.log(newArray);
}
conNames(pronoun,adj,noun,ext);

