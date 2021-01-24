import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuServer from '../components/MenuServer.js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Menu() {
  return (
    <div>
        <Navbar />
        <MenuServer/>
    </div>
  )
}