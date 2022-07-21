import React from 'react';
import {createRoot} from 'react-dom/client'

const Jsx_handle = ()=>{
    const element =(
        <div>
            <h1>Biodata Perusahaan</h1>
            <ul>
                <li>Nama: Dicoding Indonesia</li>
                <li>Bidang: Education</li>
                <li>Tagline: Decode Ideas, Discover Potential</li>
               <img src='/dicoding_image.jpeg' alt='Dicoding Image'/>
            </ul>
        </div>
    )
    // const root =createRoot(document.querySelector('#root'))
    // root.render(element)
    return(
        <div>
            <p>Test</p>
            <p>Hollas</p>
        </div>
    )
}

export {Jsx_handle}