const numJewelsInStones = (J, S) => {
    let JL = Number(J);
    let ST = Number(S);
    if(!(Number.isInteger(JL) || Number.isInteger(ST) )) {
        if(J.length < 50 && S.length < 50) {
        let setJewel = new Set(J.split(''));        
        return S.split('').filter(c => setJewel.has(c)).length;
      }
      return 'J or S must be smaller 50 characters'
    }
    return 'J or S should be words'
};

//output
let J = 'aA';
let S = 'aAAbbbb';
console.log(numJewelsInStones(J,S))