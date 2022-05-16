import React from 'react';
import Link from 'next/link'
import { NavButton } from './styled-mui';

interface InLineHrefProps{
    link: string,
}

function InlineHref(props){
    return(
        <Link href={props.href}>
            <a>
                {props.children}
            </a>
        </Link>
    )
}

function NavLink(props){
    return(
        <Link href={props.href}>
            <a>
                <NavButton className=''>
                    <span className='underline'>{props.children}</span>
                </NavButton>
            </a>
        </Link>
    )
}

export {
    InlineHref,
    NavLink
};
export type { 
    InLineHrefProps 
};
