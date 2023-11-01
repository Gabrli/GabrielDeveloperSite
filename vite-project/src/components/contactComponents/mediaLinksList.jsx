import { BsFillEnvelopeAtFill, BsFillTelephonePlusFill } from "react-icons/bs"
import { FaDiscord, FaInstagram, FaGithub } from 'react-icons/fa'
import MediaLink from "./mediaLink"
export default function MediaLinksList(){
    const mediaLinks = [
        {id: Math.random(), href: 'https://www.instagram.com/reel/CtmcFHSgdq0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==', target: '_blank', content: <FaInstagram/>},
        {id: Math.random(), href: 'mailto: gabrys.wisniewski@op.pl', content: <BsFillEnvelopeAtFill/>},
        {id: Math.random(), href: 'tel:+48694638608', content: <BsFillTelephonePlusFill/>},
        {id: Math.random(), href: '', content: <FaDiscord/>},
        {id: Math.random(), href: 'https://github.com/Gabrli', target: '_blank', content: <FaGithub/>}
    ]

    return (
        <div className="media_links_wrapper">
            {mediaLinks.map((link) => {
                return <MediaLink element={link}/>
            })}
        </div>
    )
}