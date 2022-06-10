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
                    <span className=''>{props.children}</span>
                </NavButton>
            </a>
        </Link>
    )
}

function Tech(props){
    return(
        <div className="inline-flex">
            {props.children}
        </div>
    )
}

export {
    InlineHref,
    NavLink,
    Tech
};
export type { 
    InLineHrefProps 
};
