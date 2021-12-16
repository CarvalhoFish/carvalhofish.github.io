function feedback(){
    var email=document.getElementById('email').value;
    var feed=document.getElementById('feed').value;
    if (email && feed){
        localStorage.setItem(email,feed)
        alert('Seu feedback foi salvo');
    }
    else if(email){
        alert('Por favor, insira seu feedback')
    }
    else if(feed){
        alert('Por favor, insire seu email')
    }
    else{
        alert('Por favor, preenchaos dois espaços')
    }
}