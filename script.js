function calcularMedia() {
    let t1 = parseFloat(document.getElementById("nota1").value);
    let t2 = parseFloat(document.getElementById("nota2").value);
    let t3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(t1) || isNaN(t2) || isNaN(t3)){
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos";
        return;
    }
}

let nota = ((t1 * 3) + (t2 * 3) + (t3 * 4)) / 10;

let situacao = nota >= 6 ? "aprovado" : "em recuperação";

document.getElementById("resultado").innerHTML =
    'A média final é: ${nota.toFixed(2)}<br>O aluno está ${situacao}';