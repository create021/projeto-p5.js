let minhaImagem
let colhedeira,truck,link,images,faep,lin,plantacao, caixote,prateleira,cenoura;
let pBotao,bBotao
let menuvisivel = false
let mTema = false
let claroo
let mBranco = false
let jogo
let jogoV = false
let cX = 100
let cY =  240


function preload(){
  faep = loadImage('faep.jpeg')
  
  colhedeira = loadImage('colhedeira.jpg')
  
  minhaImagem = loadImage('jajaja.jpg');
  
 truck = loadImage('truck.jpg');
  
  images = loadImage('images.jpeg');
  
  plantacao = loadImage('plantacao.png')
  caixote = loadImage('caixote.png')
  prateleira = loadImage('prateleira.png')
  cenoura = loadImage('cenoura.png')
  }







function setup() {
  createCanvas(383, 800);
  
  
  
  
  pBotao = createButton('———\n———\n———');
  pBotao.position(335,0)
  pBotao.style('display', 'inline-block')
  pBotao.style('background-color',' gray')
  pBotao.style('width', '49px')
  pBotao.style('height','50px')
    pBotao.mousePressed(() => {
    menuvisivel =! menuvisivel;
      redraw()
    })
  
    bBotao = createButton('tema');
    bBotao.position(300, 60)
    bBotao.style('display', 'inline-block')
    bBotao.style('background',  'rgb(98,93,93)')
    bBotao.style('width', '85px')
    bBotao.style('height', '40px')
    bBotao.hide()
    bBotao.mousePressed(() => {
     mTema = !mTema;
     
      redraw();
      })
  claroo = createButton('mudar\n  tema')
  claroo.position(231, 72)
  claroo.style('background', 'rgb(98, 93, 93)')
  claroo.style('display','inline-block')
  claroo.style('width', '60px')
  claroo.style('height', '40px')
  claroo.hide()
  bBotao.mousePressed(() => {
    mTema = !mTema
    if (mTema) {
      claroo.show()
      }else{
      claroo.hide()
        }
    redraw();
    })
  
  claroo.mousePressed(() => {
    mBranco = !mBranco
    })
  
  
  
  let link = createA('https://www.noticiasagricolas.com.br/\nconexaocampocidade/','Notícias Agricolas')
  link.position(17, 650)
  
  let lin = createA('https://www.sistemafaep.org.br/na-30a-edicao-agrinho-festeja-conexao-entre-o-campo-e-a-cidade/','Sistema Faep')
 lin.position(240, 650)
  
  
  
  
  
  
  
  
  
  
}

function draw() {
  background('#333333');
  if (mBranco){
    background(220)
    
    }
  fill(0,100,0)
  strokeWeight(0)
  rect(0,0,400,100)//barra de cima
   
  rect(0,750,400,70)//barra de baixo
  
  if (minhaImagem) {
    image(minhaImagem,10,10,80,80);
    }// imagem trator
  
  if (minhaImagem) {
    image(truck,5,105,200,200);
    }//imagem caminhão
  
  if (minhaImagem) {
    image(colhedeira,100, 315,270,200)//colhedeira
    
    }
    if (minhaImagem) {
      image(images, 15, 675, 140, 70)
    }
  if (minhaImagem) {
    image(faep, 220, 675, 140, 70)
    }
  if (mBranco) {
   fill(0)
  }else {
   fill(255, 255,255)
  }
  textSize(24)
  text('     Conexão\nCampo Cidade', 110,40)//titulo
  
  textSize(10)
  text('feito por Mateus luginieski de andade', 110,775)//créditos
  
  text('Produção de Alimentos:\n O campo é responsável pela produção\n agrícola, fornecendo alimentos para a\n população urbana.\n As cidades dependem do campo para\n abastecer seus mercados com\n produtos como grãos, legumes, frutas,\n carnes, leite e outros itens essenciais.',210,130
      )//primeiro texto
  text('Tecnologia e Inovação:\n As cidades são focos de inovação,e muitas tecnologias desenvolvidas\n nas áreas urbanas podem ser aplicadas na agricultura.\n Isso inclui novas ferramentas agrícolas,\n técnicas de irrigação, sistemas de monitoramento e até biotecno-\nlogia que melhoram a produtividade no campo.', 30, 540)
  
  fill('#b1aeb1')//fundo link
  rect(15, 650, 140, 20)
  
  
  if (menuvisivel) {
    fill(128, 128, 128)
    rect(300, 0, 90, 140)
    }//opções menu
  
  fill('#b1aeb1')
  rect(230, 650, 120, 20)//fundo link
  
  if (mTema) {
   fill(98,93,93)
    rect (220 , 65 , 95 ,50 )
    
    fill('#484242')
    rect(220, 115, 95, 3)
    rect(298, 65, 2, 50)
    
    fill(128, 128, 128)
    rect(220, 65, 3, 53)
    rect(220, 65, 80, 3)
    }//janela tema
  if (!menuvisivel) {
    mTema = menuvisivel
    }//se fechar o menu fecha tema junto
  
  if (menuvisivel) {
    bBotao.show();
    } else{
      bBotao.hide();
      }//tema visivel/oculto
  if (!menuvisivel) {
    mTema = menuvisivel
    }
  if (mTema){
    claroo.show()
    }else{
     claroo.hide()
    }
}
function mouseClicked() {

  console.log("Coordenadas do clique: (" + mouseX + ", " + mouseY + ")");

}


  


























