import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

function Home(props) {
    return (
         <div className="h-[100vh]">
         <section className="h-full bg-black flex items-center justify-center text-white font-semibold text-[3.875rem]">
           <h1>Task | Mansee Pagare</h1>
         </section> 
            <Section1/>
            <Section2/>
        </div>
    );
}

export default Home;