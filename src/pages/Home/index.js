import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import './home.css'

function Home(){
    

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            toast.error('Todos os campos são obrigatorios.');
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }

        emailjs.send("service_gjtszml", "template_zbmfm0k", templateParams, "TRo_f1g9jM_Xa1HXJ")
        .then(() => {
            toast.success('Formulario enviado com sucesso!')
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("Erro: ", err)
        })
    }

    return(
        <div className='container'>
            <img className='background' src="cool-background.svg" alt="background"></img>
            <div className='formulario'>
                <h1>CONTATO</h1>
                <form className='form' onSubmit={sendEmail}>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />

                    <input
                        className="input"
                        type="text"
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />

                    <textarea
                        className="textarea"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        />

                    <input className='button' type="submit" value="ENVIAR"/>
                </form>
            </div>
        </div>
    )
}

export default Home;