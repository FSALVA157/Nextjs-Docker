import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
import { Url } from "url";


const style: CSSProperties = {
   color: '#0070f3',
   textDecoration: 'underline'
}

interface IProps{
  text: string,
  href: string
}

export const ActiveLink = ({text, href}: IProps) => {
const {asPath} =useRouter()
//const mi_href = 


  return (
    <Link href={{
      pathname: href,
      query: { name: 'test' },
    }} style={asPath === href?style: undefined} >        
      {text}
    </Link>
  );
};
