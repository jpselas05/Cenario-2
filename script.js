const x_final = 12.56; // Calculado usando Raiz(v(x)-3.4,0,30) no Geogebra
let d1 = 6; // João Pedro Sales Melo | 2510426
let d2 = 4; // João Pedro Filgueiras Coelho dos Santos | 2510434
let d3 = 3; // Guilherme Moreira Azevedo | 2510423
let d4 = 9; // Leonardo Sampaio Sales | 2510389
let d5 = 1; // Francisco Magno Mendonça Quezado | 2510401
let d6 = 1; // Pedro Acácio de Souza Neto | 2510391
let N = (10 + d1 + d2 + d3 + d4 + d5 + d6) / 10;
document.getElementById("saida").innerHTML += `<p>(10 + ${[d1, d2, d3, d4, d5, d6].join(" + ")}) / 10 = ${N} (N)</p>`;
document.getElementById("saida").innerHTML += `<p><br>Iniciando busca pelo instante Y...</p>`;

// Função da velocidade v(x)
function v(x) {
    return (
        -0.0000000031091 * x ** 12 +
        0.0000006207407 * x ** 11 -
        0.0000553931661 * x ** 10 +
        0.0029136389542 * x ** 9 -
        0.100281985367 * x ** 8 +
        2.3697305302826 * x ** 7 -
        39.2203680595325 * x ** 6 +
        454.9321097156475 * x ** 5 -
        3634.7508296726205 * x ** 4 +
        19214.715529246336 * x ** 3 -
        62125.98828507261 * x ** 2 +
        104249.07756688114 * x -
        57705.67292715436
    ) - N;
};
// Derivada da função v(x), ou seja, aceleração a(x)
function a(x) {
    return (
        -0.0000000373088 * x ** 11 +
        0.0000068281472 * x ** 10 -
        0.0005539316612 * x ** 9 +
        0.026222750588 * x ** 8 -
        0.8022558829358 * x ** 7 +
        16.5881137119785 * x ** 6 -
        235.3222083571951 * x ** 5 +
        2274.6605485782375 * x ** 4 -
        14539.003318690482 * x ** 3 +
        57644.14658773901 * x ** 2 -
        124251.97657014523 * x +
        104249.07756688114);
};

let fx, dfx;
let Xn = 12.2;
let iteracoes = 0;

while (Math.abs((Xn - x_final) / x_final) > 0.001 && iteracoes < 20) {
    fx = v(Xn);
    dfx = a(Xn);
    Xn = Xn - fx / dfx;
    iteracoes++;
    document.getElementById("saida").innerHTML += `<p>Iteração ${iteracoes}: Xn = ${Xn.toFixed(6)}</p>`;
}

document.getElementById("resultado").textContent = `Instante Y encontrado: ${Xn.toFixed(6)}s para velocidade de ${N} m/s`;
