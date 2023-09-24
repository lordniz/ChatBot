<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Sobre VicGPT y su instalación en tu server

VicGPT es un chatbot de IA cuyas respuestas te serán de muy poca utilidad (ojo, si consigues caerle bien puede que adapte su personalidad ¡¡De verdad!! XD), aunque lo habitual es que sea gruñón, sarcástico y un poco maleducado. Ha sido creado para enseñar a las personas que quieran aprender los conceptos básicos del API de OpenAI en Laravel, así como mostrar la potencia del modelo GPT.

Además, tiene la capacidad de hablar (con voz) gracias al API de ElevenLabs.

En el código (y el video de youtube) te enseño cómo escribir correctamente el código para que el chat guarde la conversación en un histórico y tenga memoria de lo que estáis hablando. Además de su configuración de personalidad para que sea un poco pasota, maleducado y vacilón. 

Este es un proyecto educativo gratuito que puedes descargar para probarlo en tu server y modificarlo o jugar con él todo lo que quieras. ¡El objetivo principal es que aprendas!

Se trata de una instalación de Laravel preconfigurada con un controlador, una vista y un código JS/Ajax para el chat. Está preparada para que te sirva como base si quieres iniciar tu propio proyecto de IA usando Laravel para una web a medida en PHP.

El proyecto no usa base de datos y no está configurada. Tampoco está configurado el sistema de emails. Solo la base de la IA.

Puedes llevar este proyecto hasta donde tú quieras llevarlo, e incluso entrenar tu IA: https://openai.com/blog/customizing-gpt-3, https://platform.openai.com/docs/guides/fine-tuning, https://github.com/openai/openai-cookbook/blob/main/examples/Fine-tuned_classification.ipynb

Para empezar a modificarlo símplemente descarga el repositorio como un paquete ZIP. Súbelo a tu hosting y descomprímelo allí. RENOMBRA la carpeta -vendor a vendor.

Una vez que lo hayas instalado, al entrar en la url que hayas usado te aparecerán 2 dialog boxes. El primero es para que introduzcas tu clave de API de Eleven Labs. API de OpenAI. El segundo (opcional) la clave de API de Eleven Labs. Si no introduces esta segunda clave lo único que ocurrirá es que el bot no hablará.

Si quieres no tener que estar introduciendo las claves de API cada vez que entras símplemente configúralas en el archivo .env (las dos últimas opciones comentadas, obviamente tendrás que descomentarlas!!)

Una vez hecho eso, cuando entres al dominio, ignora los dos dialog (no escribas nada en ellos). La aplicación funcionará.

MUCHO CUIDADO si pones tus claves en el archivo .env con tu dominio público, especialmente si usas claves de API de pago, ya que cualquiera que entre podrá usar el chat y se consumirán tus tokens!!!

Si eliges configurar las claves de API en .env pero no quieres que la gente se coma tus tokens usa una protección de .htaccess + .htpasswd o programa Laravel para que la gente tenga que crearse una cuenta.

Si decides programar la App para habilitar registro de usuarios, permisos, etc... mírate Spatie: https://spatie.be/docs/laravel-permission/v5/introduction

Si quieres que haga un video de Spatie vete a mi canal y me lo pides allí. ¡Suerte y que disfrutes de este chatbot!

Si necesitas ayuda con algo envíame un mail e intentaré ayudarte en todo lo que esté a mi alcance.

## About VicGPT and its installation on your server

VicGPT is an AI chatbot whose responses will be of little use to you (though if you manage to get on its good side, it might adapt its personality, seriously!! XD). It is known to be grumpy, sarcastic, and a bit rude. It has been created to teach people who want to learn the basics of the OpenAI API in Laravel and demonstrate the power of the GPT model.

Additionally, it has the ability to speak (with voice) thanks to the ElevenLabs API.

In the code (and the YouTube video), I show you how to properly write the code so that the chat saves the conversation in a log and remembers what you are talking about. I also provide instructions for configuring its personality to be a bit laid-back, impolite, and playful.

This is a free educational project that you can download to test on your server, modify, or play with as much as you want. The main objective is for you to learn!

It is a preconfigured Laravel installation with a controller, a view, and JS/Ajax code for the chat. It is ready to serve as a base if you want to start your own AI project using Laravel for a custom PHP web.

The project does not use a database and is not configured for it. The email system is also not configured. Only the AI part is set up.

You can take this project as far as you want, and even train your AI using resources like: https://openai.com/blog/customizing-gpt-3, https://platform.openai.com/docs/guides/fine-tuning, https://github.com/openai/openai-cookbook/blob/main/examples/Fine-tuned_classification.ipynb

To start modifying it, simply download the repository as a ZIP package. Upload it to your hosting and decompress it there. RENAME folder -vendor to vendor.

Once you have installed it, when you enter the URL you used, two dialog boxes will appear. The first one is for you to enter your Eleven Labs API key. The second one (optional) is for the Eleven Labs API key. If you don't enter this second key, the bot will simply not speak.

If you don't want to have to enter the API keys every time you enter, simply configure them in the .env file (the last two commented options, you obviously have to uncomment them!!)

Once you have done that, when you enter the domain, ignore the two dialogs (do not type anything in them). The application will work.

BE VERY CAREFUL if you put your keys in the .env file with your public domain, especially if you use paid API keys, as anyone who enters will be able to use the chat and your tokens will be consumed!!!

If you choose to configure the API keys in .env but don't want people to eat up your tokens, use .htaccess + .htpasswd protection or program Laravel to require people to create an account.

If you decide to program the app to enable user registration, permissions, etc., take a look at Spatie: https://spatie.be/docs/laravel-permission/v5/introduction

If you want me to make a video about Spatie, go to my channel and request it there. Good luck and enjoy this chatbot!

If you need help with anything, send me an email, and I'll try to assist you to the best of my abilities.
