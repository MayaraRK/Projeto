function carregaHistoria() {
    var biografias = {
      bio01: {
        nome: "Mimi",
        imagem: "https://i.postimg.cc/zG5FktFN/Whats-App-Image-2023-03-20-at-12-15-24.jpg",
        descricao:"Mística, uma gata cor escaminha, foi a primogênita entre os seus. Mimi adorava se esfregar na azeitona, amava uma faxina e ser limpa pelo seu irmão Thor. Tinha mania de dormir com suas mamães, enroladinha no cobertor que sua vovó deu. Sempre muito arteira, aventureira.",
        curiosidade:"Gostava de subir nos carros - 2015-2023",
      },
     
      bio02: {
        nome: "Thor",
        imagem: "https://i.postimg.cc/t45tv3Bx/Whats-App-Image-2023-03-20-at-12-15-24-1.jpg",
        descricao:"Thor é uma gato que tem a pelagem cinza, companheiro de mimi, ele é um gato estilo aposentado. Gosta de ficar mais sozinho, não gosta muito que fique pegando, e é seletivo com as pessoas. Muito carinhoso quando quer.",        
        curiosidade:
          "Parece um lorde, e tem tanto pelo que parece estar de bombacha.",
      },


      bio03: {
        nome: "Olivia",
        imagem: "https://i.postimg.cc/3rsBkJyd/Whats-App-Image-2023-03-20-at-12-15-26.jpg",
        descricao:"Tipica salsicha, Olivia tem o pelo curto e ruivo. Gosta de dormir, é ciumenta e apaixonada pelo seu avô humano. Parece uma mortadela, de tão rolicinha. Gosta de brincar om o irmão Duque e é doida por batata frita",        
        curiosidade:
          "Tem uma humana favorita e gosta de coisas que não existe, exemplo: bolha de sabão.",
      },

      bio04: {
        nome: "Fred",
        imagem: "https://i.postimg.cc/pXKBzb8k/Whats-App-Image-2023-03-20-at-12-15-25.jpg",
        descricao:"Fred era um lindo filhote de salsicha, gostava de correr pela casa, exigia comida e parecia o Thanos",        
        curiosidade:
          "Para exigir comida, carregava seu potinho que era maior que ele, e saia batendo pelas paredes, pra ver se alguem reparava. 2021-2021",
      }, 

      bio05: {
        nome: "Duque",
        imagem: "https://i.postimg.cc/0zXwB2YB/Whats-App-Image-2023-03-20-at-12-15-27.jpg",
        descricao:"Duque tem os pelos pretos, muito brilhantes. Acorda animado, e dorme animado. É animação o dia inteiro. Ele gosta de brincar com seus irmãos, é muito carinhoso e ama encher o seu irmão Tunico.",        
        curiosidade:
          "Seus dentes são incrivelmente brancos.",
      },

      bio06: {
        nome: "Tunico",
        imagem: "https://i.postimg.cc/5j882JJX/Whats-App-Image-2023-03-20-at-12-15-23.jpg",
        descricao:"Tunico lembra um siamês que acabou a tinta. Tunico foi resgatado, com uma das pernas quebradas. Com o tempo foi ganhando espaço, confiança e amor entre seus irmãos, infelizmente não pode conhecer a Mimi. É brincalhão, e carinhoso.",        
        curiosidade:
          "Gosta de queijo parmesão, ricota e batata frita.",
      },
    }
    
    

      var content = document.getElementById("content");

      for (var bio in biografias) {
        content.innerHTML +=
          '<div class="card">' +
          '<img src="' +
          biografias[bio].imagem +
          '"/>' +
          "<details>" +
          "<summary>" +
          biografias[bio].nome +
          "</summary>" +
          "<p>" + 
          biografias[bio].descricao + 
          "</p>" + 
          "<blockquote>" + 
          biografias[bio].curiosidade + 
          "</blockquote>" +
          "</details>" +
          "</div>";
          
    }
}

carregaHistoria();