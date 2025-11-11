import style from './App.module.css'
import fotoPerfil from '../public/a_faça_ele_com_um_ter.png'
import instagram from '../public/bob.png'
import discord from '../public/Discord-Logo-removebg-preview.png'
import github from '../public/20240108-github-destaque-1920x1097.png'
import steam from '../public/steam.png'
import html from '../public/htmal.webp'
import css from '../public/OIP (11).webp'
import js from '../public/OIP (12).webp'
import vite from '../public/vite-js-4096-logo.png'
import verce from '../public/vercel1868.jpg'
import react  from '../public/OIP (13).webp'


import { useState } from 'react'

function App() {
    const defaultPhoneNumber = '5541995223450'

  
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:'',
  })

  const handleChange = (event) =>{
    const{name, value} = event.target
    setFormData({...formData, [name]:value})
 }

 const handZap= () =>{
   const{name, email, message} = formData

   const urlzap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
   Nome:${name}%0D%0A
   Email:%20${email}%0D%0A
   Mensagem:%20${message}%0D%0A`

   window.open(urlzap, "_blank")
 }

//javascript
  return (
    <>
      <nav className={style.menu}>
     <a href="#s1"> Home</a>
     <a href="#s2"> Cards</a>
     <a href="#s3"> Video </a>
     <a href="#s4"> Contato</a>
      </nav>
      <main>
       <section className={style.s1}
        id='s1'>
        <div className={style.left}>
        <img  className={style.imgPerfil} src={fotoPerfil} alt="Foto perfil"/>
        </div>
        <div className={style.paragraph}>
        <h2>davi emanuel passoni</h2>
        <p>Sou Davi, programador com foco no desenvolvimento em linguagem C e no uso do sistema operacional Linux. Tenho interesse em compreender a fundo o funcionamento interno dos sistemas e aprimorar minhas habilidades na criação de soluções eficientes e bem estruturadas.
Trabalho com atenção aos detalhes e busco sempre aplicar boas práticas de programação, priorizando clareza, organização e desempenho no código. </p>
      </div>
    </section>
 
        <section className={style.s2} id='s2'>
          <h2 className={style.tecTitle}  >Tecnologias</h2>
          <div className={style.wrapCards}>
            <div className={style.card}>
              <img width={500}  src= {css}  alt='HTML'/>
              <h3>HTML</h3>
              <p>
                HTML é a sigla para Hypertext Markup Language (Linguagem de Marcação de Hipertexto) e é a linguagem de marcação padrão usada para criar e estruturar páginas da web
              </p>

            </div>
              <div className={style.card}>
              <img width={500} src= {html} alt='CSS'/>
              <h3>CSS</h3>
              <p>
              CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação visual de um documento escrito em linguagem de marcação como HTML
              </p>

            </div>
              <div className={style.card}>
              <img width={500} src= {js}  alt='JS'/>
              <h3>JavaScript</h3>
              <p>
                JavaScript é uma linguagem de programação leve, interpretada e versátil, usada para tornar páginas da web dinâmicas e interativas
              </p>

              </div>
              <div className={style.card}>
              <img width={500} src= {vite}  alt='VITE'/>
              <h3>Vite</h3>
              <p>
                O Vite é um servidor de desenvolvimento local apoiado pela VoidZero Inc. O Vite foi escrito por Evan You, o criador do Vue.js. Ele oferece suporte a TypeScript e JSX. Ele usa Rollup e esbuild internamente para empacotamento.
              </p>

              </div>
              <div className={style.card}>
              <img width={500} src= {react}  alt='REACT'/>
              <h3>React</h3>
              <p>
                React é uma biblioteca JavaScript para construir interfaces de usuário (UIs) de forma eficiente, dividindo o trabalho em componentes reutilizáveis.
              </p>

              </div>
              <div className={style.card}>
              <img width={500} src= {verce}  alt='VERCEL'/>
              <h3>Vercel</h3>
              <p>
                Vercel é uma plataforma de nuvem que ajuda desenvolvedores a construir e hospedar sites e aplicativos web de forma eficiente e escalável.
              </p>

            </div>
          </div>
        </section>

         <section id='s3'>
         <h2>sessao 3</h2>
         </section>

         <section id='s4'className={style.s4}>
          <h2>CONTATO</h2>
          <div className={style.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
            <label htmlFor="email">imporme seu email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>
            <label htmlFor="message">informe uma mensagem</label>
            <textarea name="message"id="message" value={formData.massage} onChange={handleChange} cols="30" raws="10" required/>
            <button onClick={handZap}>Enviar mensagem</button>
          </div>
        </section>

      </main>
      <footer className={style.rodape} >
        <a href="https://www.instagram.com/davi_39s/?next=%2F" target='_blank' rel='noopener noreferrer'  >  <img width={70} src={instagram} alt="instagram" />  </a>
        <a href="https://discord.com/channels/1422900587640655956/1422900588215013552"  target='_blank'rel='noopener noreferrer'   >  <img width={70} src={discord} alt="discord" />  </a>
        <a href="https://github.com/davipassoni" target='_blank' rel='noopener noreferrer' >  <img width={70} src={github} alt="github" />  </a>
        <a href="https://steamcommunity.com/profiles/76561199596400305/" target='_blank' rel='noopener noreferrer' >  <img width={70} src={steam} alt="steam" />  </a>
      </footer>
    </>
  )
}
export default App