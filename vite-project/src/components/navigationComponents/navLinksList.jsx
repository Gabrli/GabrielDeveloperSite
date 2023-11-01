import SideMenuLink from "./navLink";

export default function SideMenuLinksList() {
  const links = [
    {id: Math.random(), href: '#ab', content: 'About'},
    {id: Math.random(), href: '#fo', content: 'Contact'},
    {id: Math.random(), href: '#pro', content: 'Projects'}
   ]
  return (
    <ul> 
      {links.map((link) => {
        return (
         <SideMenuLink element={link}/>
        );
      })}
    </ul>
  );
}
