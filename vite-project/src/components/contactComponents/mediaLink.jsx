
export default function MediaLink(props){
    const { id, href, content, target } = props.element 
    return <a target={target === '_blank' ? '_blank' : ''} key={id} href={href}>{content}</a>
}