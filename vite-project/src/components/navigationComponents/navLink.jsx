export default function SideMenuLink(props){
    const { href, id, content} = props.element 
    return <li><a key={id} href={href}>{content}</a></li>
}