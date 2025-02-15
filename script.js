function carregar(){
var msg = window.document.getElementById('msg') //ligação das div com o javascript utilizando os id
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){

    img.src = 'img3.png'
    document.body.style.backgroundColor ='#e2cd9f' // comando para mudar a cor do fundo para cada img

}else if(hora >= 12 && hora <=18){

    img.src = 'img2.png'
    document.body.style.backgroundColor ='#b9846f'

}else{

    img.src = 'img1.png'
    document.body.style.backgroundColor ='#515154'

}
}