import React from 'react';
import { useLocation } from 'react-router-dom';

import Settings from './components/Settings/Settings.jsx';
import Modules from './components/Modules/Modules.jsx';
import { ModuleProvider } from './contexts/ModuleContext.jsx'; 


const Route = () => {
    const location = new URLSearchParams(useLocation().hash);
    return (
        <>
            { location.get('tab') === 'settings' && <Settings initialTab='general' /> }
            { location.get('tab') === 'modules' && <Modules/> }
        </>
    );
}

const App = () => {
    const currentUrl = window.location.href;
    document.querySelectorAll('#toplevel_page_catalog>ul>li>a').forEach((element) => {
        element.parentNode.classList.remove('current');
        if (element.href === currentUrl) {
            element.parentNode.classList.add('current');
        }
    });
    
    return <ModuleProvider modules = {appLocalizer.active_modules}><Route/></ModuleProvider> 
   
}

export default App;