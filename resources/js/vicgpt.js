function foco(idElemento){
    document.getElementById(idElemento).focus();
}
foco("msg");
alert("hmm");

$(document).ready(function() {
    // Borrar los datos del almacenamiento local al recargar la pagina
    localStorage.clear();
    
    // Pedir las claves
    var apiKey = prompt('Ingresa tu clave de API Open AI.');
    var elevenApikey = prompt('Ingresa tu clave de Eleven API. (Si quieres que el bc')
    
    // Almacenar las claves en el almacenamiento local
    localStorage.setItem('apikey', apikey);
    localStorage.setItem('elevenApikey', elevenApikey) ;
    
    var chatMessages = $('#chat-messages'); // Elemento HTML para mostrar los mensaj
    var chatInput = $('#chat-input'); // Elemento HTML para el campo de entrada del
    var chatForm = $('#chat-form'); 
    var chatHistory = []; 
        
    chatForm.submit(function(event) {
        event. preventDefault();
        var message = chatInput.val().trim();
    
        if(message !== ''){
            sendMessage(message);
            chatInput.val('');
        }
     
    });
    function sendMessage(message) {
        var userMessageElement = createMessageElement( 'Usuario', message);
        chatMessages.append(userMessageElement);
        
        // Actualizar el historial de mensajes con el mensaje del usuario
        chatHistory.push({ role: 'user', content: message });
        
        // Mostrar el preloader en el globo del bot        
        var botMessageElement = createBotMessageElement('');
        chatMessages. append(botMessageElement);
        chatMessages.scrollTop(chatMessages[0].scrollHeight) ;
        
            $.ajax({
                headers: { 'X-CSRF-TOKEN': $('meta[name=csrf-token"]').attr('content')},
                url: "/open-ai",
                method: "POST",
                data:{
                    msg: message,
                    chatHistory: chatHistory,
                    apikey: apikey,
                    elevenApikey: elevenApikey
                },
                success: function(response){
                    chatHistory.push({role:'assistant',content:response.response});

                    botMessageElement.text(response.response);
                    if(response.audioFile){
                        fetch(response.audioFile)
                        .then(response => response.blob())
                        .then(blob => {
                            var audioUrl = URL.createObjectURL(blob);

                            var audioElement = document.createElement("audio");
                            audioElement.src = audioUrl;
                            audioElement.autoplay = true;

                            botMessageElement.append(audioElement);
                        })
                        .catch(error => {
                            console.error("Error al obtener el archivo de audio:", erro);
                        });
                    }
                    chatMessages.scrollTop(chatMessages[0].scrollHeight);
                },
                error: function(xhr, status, error){
                    botMessageElement.text("ERROR: 0 no has puesto tu clave de API o GPT");
                    chatMessages.scrollTop(chatMessages[0].scrollHeight);
                }
            });
        }
        function createMessageElement(sender, message){
            var senderClass = sender.toLowerCase() === 'usuario' ? 'user-message' : 'bot-message';
            var messageElement = $('<div class="' + senderClass + '">');//Crea un elemento
            messageElement.text(message); // Establece el texto del mensaje en el elemento
            
            return messageElement; // Retorna el elemento de mensaje creado
        }

        function createBotMessageElement(message){
            var botMessageElement = $('<div class="bot-message">');
            var preloaderImage = $('<img src="/preloader.gif" width="32" alt="Preloader"/>');
            botMessageElement.append(preloaderImage);
            botMessageElement.append('<span>'+message+'</span>');
            
            return botMessageElement;
        }


});