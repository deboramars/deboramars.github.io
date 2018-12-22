import React, { Component } from 'react';
import './App.css';
import github from './Assets/Icons/github.svg';
import linkedin from './Assets/Icons/linkedin.svg';
import twitter from './Assets/Icons/twitter.svg';

export default App => 
<div className = "container" >
  <img src="https://scontent.frec3-1.fna.fbcdn.net/v/t1.0-1/p160x160/46241106_1913509228726563_7065157507555000320_n.jpg?_nc_cat=111&_nc_ht=scontent.frec3-1.fna&oh=4d767caf09d18f380aa8107baa99a979&oe=5C99942D" className = "container__image" alt="Imagem do Perfil" ></img>
  <div className = "container__content">
    <h1 className = "container__content__tittle">Débora Mars</h1>
    <p className = "container__content__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident amet inventore impedit nisi molestiae adipisci, vitae esse repudiandae similique quidem neque a magni! Debitis excepturi sunt hic animi sequi. Quas obcaecati modi maxime eveniet, labore quos atque fuga commodi nisi. Iusto reprehenderit aut incidunt sequi tenetur vitae perspiciatis laudantium cupiditate, vero voluptate magni itaque harum consequatur ullam cumque quos et corporis, voluptatibus odio natus beatae exercitationem, provident deleniti! Eaque, dolorum!</p>
    <ul className = "container__content_icons">
      <li className = "container__content_icons__github">
        <a className = "container__content_icons__github__link" href="https://github.com/deboramars/" target="_blank">
        <img src ={github} alt="Icone Github"></img>
        </a>
      </li>
      <li className = "container__content_icons__linkedin">
        <a className = "container__content_icons__linkedin__link" href="https://www.linkedin.com/in/deboramars/" target="_blank">
        <img src ={linkedin} alt="Icone Linkedin"></img>
        </a>
      </li>
      <li className = "container__content_icons__twitter">
      <a className = "container__content_icons__github__link" target="_blank">
      <img src ={twitter}></img>
      </a>
      </li>
    </ul>

  </div>
</div>
