
export default function NavbuttonToggle(props){
    return <button onClick={() => props.onClick()} className="btn_show_side_menu">{props.content}</button>
}