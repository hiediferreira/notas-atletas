/*
    Saída esperada: 
        Atleta: Cesar Abascal
        Notas Obtidas: 10,10,7.88,8.42,9.34
        Média Válida: 9,253333
*/

class Atletas {
    constructor(atletas){
        this.nomes = atletas.map(function(atleta){
            return atleta.nome;
        });

        this.notas = atletas.map(function(nota){
            return nota.notas;
        });
    }

    organizaNotas(){
        let notasOrdem = this.notas.map(function(nota){
            return nota.sort((a, b) => a - b);
        })

        let notasValidas = notasOrdem.map(function(nota){
            return nota.slice(1, 4);
        })

        return notasValidas;
    }

    resultadoAtletas(){
        let notasFinais = this.organizaNotas();  //recebe array de notasValidas
        let medias = notasFinais.map(function(nota){
            let soma = 0;
            nota.forEach(function(nota){
                soma += nota;
            })
            return soma / 3;
        })

        for(let i = 0; i < medias.length; i++){
            console.log(`
                Atleta: ${this.nomes[i]}
                Notas Obtidas: ${this.notas[i].join(", ")}
                Média Válida: ${medias[i]}
            `);
        }
    }
}

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   let resultado = new Atletas(atletas);
   //console.log(resultado)
   resultado.resultadoAtletas();