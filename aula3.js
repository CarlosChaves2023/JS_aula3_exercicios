//Atividade 01
var valor = prompt(`Digite um número:`)
while(valor >= 0){
    console.log(valor)
    valor--
}

//Atividade 02
var contador = 0
var soma = 0
while(true){
    notas = prompt(`Digite sua nota`)
    soma +=parseFloat(notas)
    contador +=1
    var resposta = prompt(`Deseja adicionar mais uma nota?
    Digite: 
    [1] sim
    [2] nâo`)
    if(parseFloat(resposta) == 2){
        break
    }
}
var media = soma / contador
console.log(media)

//Atividade 03
soma = 0
while(true){
    var numero = parseFloat(prompt(`Digite um vsalor(digite 0 para parar):`))
    soma += numero

    if(numero == 0){
        break
    }
}
console.log(soma)

//Atividade 04
while(true){
    var usuario = prompt(`Nome do usuário`)
    var senha = prompt(`Senha:`)
    if(usuario == senha){
        window.alert(`Usuário e senha não podem ser iguais.`)
    } else {
        break
    }
}

//Atividade 05
var soma = 0
var media = 0
for(var i = 1; i <= 5; i++){
    var idade = parseFloat(prompt(`Digite a idade da ${i}ª pessoa:`))
    soma += idade
    media = soma / i
}
if (media <= 25){
    window.alert(`Média de idade: ${media}
    Turma jovem.`)
} else if (media <= 60){
    window.alert(`Média das idades: ${media}
    Turma adulta.`)
} else {
    window.alert(`Média das idades: ${media}
    Turma idosa.`)
}
console.log(media)

//Atividade 06
var numero = 0
var soma = 0
while(numero <= 50){
    soma += numero
    numero++
}
console.log(soma)


//Desafio Prático
var saldo = 1000
while(true){
    var opcao = prompt(`Digite a opção desejada:
    [1] Saldo
    [2] Saque
    [3] Depósito
    [4] Sair`)

    switch(parseFloat(opcao)){
        case 1:
            alert(`Saldo: R$${saldo}`)
            break
        
        case 2:
            while(true){
            var saque = parseFloat(prompt(`Digite o valor desejado:`))
            if(saque <= saldo && saque > 0){
                saldo -= saque
                alert(`Transação efetuada com sucesso.`)
                break

            } else if (saque <= 0){
                alert(`Saque não pode ter valor negativo ou nulo.`)
            } else if(saque > saldo){
                alert(`Saldo insuficiente.`)
            } else{
                alert(`Entrada de dados inválida.`)
            }
        }
            break

        case 3:
            while(true){
                var deposito = parseFloat(prompt(`Digite o valor do depósito.`))
                if(deposito > 0){
                    saldo += deposito
                    alert(`Depósito realizado com sucesso.`)
                    break
                } else if(deposito <= 0){
                    alert(`Depósito não pode ter valor negativo ou nulo.`)
                }else {
                    alert(`Entrada de dados inválida.`)
                }   
             }   
            break            

        case 4:
            alert(`Volte Sempre.`)
            break

        default:
            alert(`Não é uma escolha válida.`)
    }
}
