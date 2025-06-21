
function calcular() {
        var preco = parseFloat(document.getElementById('preco').value);
        var quantidade = parseFloat(document.getElementById('quantidade').value);

        // Verificação se os campos estão preenchidos
        if (isNaN(preco) || isNaN(quantidade)) {
            document.getElementById('resultado').innerHTML = "Preencha todos os campos!";
            return;
        }

        // Cálculo
        var total = preco * quantidade;

        // Mostrar resultado na tela
        document.getElementById('resultado').innerHTML = 
            "O valor é: R$ " + total.toFixed(2);}

function Somar(){
    var  num1 = parseFloat(document.getElementById('num1').value);
    var  num2 = parseFloat(document.getElementById('num2').value);

     if (isNaN(num1) || isNaN(num2)) { // ele verifica se algum dos dois valores nao é um número
            document.getElementById('resultadoSoma').innerHTML = "Preencha todos os campos!";
            return; //retorna
        }
        var total = num1 + num2;

        document.getElementById('resultadoSoma').innerHTML= "O resultado da soma é: " + total.toFixed(2);}

function Subtrair(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)){
        document.getElementById('resultadoSubtracao').innerHTML = "Complete todos os campos";
        return;
    }
    var total = num1 - num2;
    document.getElementById('resultadoSubtracao').innerHTML = "O resultado é: " + total.toFixed(2);}

function Dividir() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultadoDivisao').innerHTML = "Preencha todos os campos!";
        return;
    }

    if (num2 === 0) {
        document.getElementById('resultadoDivisao').innerHTML = "Não é possível dividir por zero!";
        return;
    }

    var total = num1 / num2;

    document.getElementById('resultadoDivisao').innerHTML = 
        "O resultado da divisão é: " + total.toFixed(2);
}



