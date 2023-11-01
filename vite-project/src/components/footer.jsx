import React from "react";
import './styles/footer.css'
import { BsFillEnvelopeAtFill, BsFillTelephonePlusFill } from "react-icons/bs"
import { FaInstagram, FaGithub } from 'react-icons/fa'
import MediaLinksList from "./contactComponents/mediaLinksList";
export default function Footer(){
    return (
        <>
        <footer id="fo" className="app-footer">
            <header>
                <p><b>Get in touch</b></p>
            </header>
            <section className="text-footer-box">
                <p><b>If you want to stand out from the competition. contact us </b></p>
            </section>
           <MediaLinksList/>
            <section className="copyright-box">
                <p><b>Copyright Gabriel.dev</b></p>
            </section>
        </footer>
        </>
    )
}