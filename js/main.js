
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por cliqar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://onepiece-ex.com.br/");
    //window.location.href = "https://onepiece-ex.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "arigatou the rato";
    //alert("Trocar texto");
    elemento.innerHTML = "arigatou the rato";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o rato aqui";
    elemento.innerHTML = "passe o rato aqui rato";
}


function load(){
    alert("pagina carregada");
}


function funcaoChange(elemento){
    console.log(elemento.value)
}
/*

/*

function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/


/*


function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(soma(5 , 10));
alert(setReplace("vai Jãpão", "japão", "Brasil"));


/*

var d = new Date();
alert(d.getMinutes());


/*
var count;
for(count=0; count <=5; count++){
    alert(count)
}




/*


var count = 0;
while (count < 5){
    console.log(count);
    count++;
    alert(count)
};





/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade")
}
else{
    alert("Menos de idade")
}
*/
//var frutas = [{nome: "maça", cor: "vermelha"}]
//console.log(fruta.nome);
//alert(fruta.cor);

//var frutas = {nome: "maça", cor: "vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);

//var lista = ["maça", "pêra", "laranja"]
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString())
//console.log(lista.join(" / "))

//var nome = "Eronildo Neto";
//var n1 = 5;
//var n2 = 3;
//var frase = "japão é o melhor time do mundo"
//alert(nome + " tem " + n1 + " anos ");
//alert(idade + idade2)
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.replace("japão", "Brasil"));
//console.log(frase.toUpperCase());
//alert(frase.replace("japão", "brasil"));

