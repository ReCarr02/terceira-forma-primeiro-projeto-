console.log ("Digite o nome do herói")
let nickname = "Skuld"
console.log ("Olá, " + nickname + "!")
let xp = 10001
let levelFerro = "Ferro"
let levelBronze = "Bronze"
let levelPrata = "Prata"
let levelOuro = "Ouro"
let levelPlatina = "Platina"
let levelAscendente = "Ascendente"
let levelImortal = "Imortal"
let levelRadiante = "Radiante"

switch (xp>0){
    case xp <=1000:
        xp = levelFerro;
     break;
    case xp >1000 && xp <=2000:
        xp = levelBronze;
    break;
    case xp >2000 && xp <=5000:
        xp = levelPrata;
    break;
    case xp >5000 && xp <=7000:
        xp = levelOuro;
    break;
    case xp >7000 && xp <=8000:
        xp = levelPlatina;
    break;
    case xp >8000 && xp <=9000:
        xp = levelAscendente;
    break;
    case xp >9000 && xp <=10000:
        xp = levelImortal;
    break;
    case xp >10000:
        xp = levelRadiante;
    break;
}
console.log ("O herói " + nickname + " está no nível " + xp)