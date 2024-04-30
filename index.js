const Heroi = 'Jackie_Chan';
let xp = 5500;
let patente;

switch (true) {
    case  xp >= 0 && xp <= 1000:
        patente = 'Ferro';
        break;
    case xp >= 1001 && xp <= 2000:
        patente = 'Bronze';
        break;
    case xp >= 2001 && xp <= 5000:
        patente = 'Prata';
        break;
    case xp >= 5001 && xp <= 7000:
        patente = 'Ouro';
        break;
    case xp >= 7001 && xp <= 8000:
        patente = 'Platina';
        break;
    case xp >= 8001 && xp <= 9000:
        patente = 'Ascendente';
        break;
    case xp >= 9001 && xp <= 10000:
        patente = 'Imortal';
        break;
    case xp > 10001:
        patente = 'Radiante';
        break;
    default:
        patente = 'Desconhecido';
}

console.log(`O Herói ${Heroi} está no nível ${patente}!`);