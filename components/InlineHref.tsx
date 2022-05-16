import React from 'react';
import Link from 'next/link'

interface InLineHrefProps{
    link: string,
}

function InlineHref(props){
    return(
        <Link href={props.link}>
            <a>
                {props.children}
            </a>
        </Link>
    )
}

export default InlineHref

export type { 
    InLineHrefProps 
};
