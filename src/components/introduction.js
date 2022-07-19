import React from 'react';
import { createRoot } from 'react-dom/client';


const Introduction = () => {
    
    const Heading = React.createElement('h1', { className: 'context' }, 'Biodata Perusahaan');

    const listItem1=React.createElement('li',null,'Nama: Dicoding Indonesia');
    const listItem2=React.createElement('li',null,'Bidang: Education');
    const listItem3=React.createElement('li',null,'Tagline: Tagline: Decode Ideas, Discover Potential.');
    
    const unorderedList = React.createElement('ul',null,[listItem1,listItem2,listItem3])

    const container = React.createElement('div',null,[Heading,unorderedList])

    const root = createRoot(document.querySelector('#root'));
    root.render(container)
    return (
        <p>Wazzap</p>
        
    )
}


export { Introduction }