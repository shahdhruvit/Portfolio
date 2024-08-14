import { socialLinks } from "../User";



const Social=()=>{
    
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a key={index} href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out" rel="noreferrer" >
        <div data-aos="fade-up-left" data-aos-duration="800">
        <socialLink.icon stroke={1.5} className="-rotate-90" size={25}/>
        </div>
    </a>
    })
   return <div className="flex md-mx:hidden items-center text-textColor gap-8 fixed bottom-32 -left-44  rotate-90">
        {socialIcons}
        <hr className="border w-40 rounded-full bg-textColor border-textColor"/>
     </div>

}
export default Social;