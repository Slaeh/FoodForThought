import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <layout>
    <br></br>
      <!-- <h1><strong>Hello!</strong></h1> -->
      <h1>
        <span id="H">H</span>
        <span id="E">E</span>
        <span id="L">L</span>
        <span id="L">L</span>
        <span id="O">O</span>
    </h1>
      <br></br>
      <p>This project will utilize a pay-it-forward system. The user will have the option to deliver an inspirational quote to someone as a kind gesture. Due to 
          our current circumstances, sometimes we just need to hear something kind. 
        <br></br>
        Languages, Frameworks, Tools & Software we used:
        <ul>
            <li><a href="https://www.javascript.com/" target="_blank">Javascript</a></li>
            <li><a href="https://html.com/" target="_blank">HTML</a></li>
            <li><a href ="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a></li>
            <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap4</a></li>
            <li><a href="https://reactjs.org/" target="_blank">React</a></li>
            <li><a href="https://nextjs.org/" target="_blank">Next.js</a></li>
            <li><a href="https://vercel.com/docs" target="_blank">Vercel</a></li>
            <li><a href="https://git-scm.com/" target="_blank">Git</a></li>
            <li><a href="https://www.adobe.com/products/xd.html" target="_blank">Adobe Xd</a></li>
        </ul>

</layout>
  )
}