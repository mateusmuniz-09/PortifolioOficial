const zap2 = document.getElementById('zap2');
const zap = document.getElementById('zap');
zap.addEventListener('click', ()=>{

    const numeroWhatsapp = "5588981252883"; // Seu número sem espaços e sem "+"
    const mensagem = "Olá, gostaria de solicitar um orçamento!";
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank");
    


});
zap2.addEventListener('click', ()=>{

    const numeroWhatsapp = "5588981252883"; // Seu número sem espaços e sem "+"
    const mensagem = "Olá, gostaria de solicitar um orçamento!";
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank");
    


});