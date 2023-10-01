import React from "react";
import './styles/footer.css'
import { BsFillEnvelopeAtFill, BsFillTelephonePlusFill } from "react-icons/bs"
import { FaInstagram, FaGithub } from 'react-icons/fa'
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
            <ul>
                <a href="https://www.instagram.com/reel/CtmcFHSgdq0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank"><li><b>{<FaInstagram/>}</b></li></a>
                <a href="mailto: gabrys.wisniewski@op.pl"><li><b>{<BsFillEnvelopeAtFill/>}</b></li></a>
                <a href="tel:+48694638608"><li><b>{<BsFillTelephonePlusFill/>}</b></li></a>
                <a href="https://github.com/Gabrli" target="_blank"><li><b>{<FaGithub/>}</b></li></a>
            </ul>
            <section className="copyright-box">
                <p><b>Copyright Gabriel.dev</b></p>
            </section>
        </footer>
        </>
    )
}