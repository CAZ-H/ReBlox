import React from 'react';
import DOMData from 'pages/games/utility';
import { renderPage } from 'common/utility';

import Header from 'common/components/Header';

const Page = () => {
    return (
        <div>
            <Header/>
            Whew look at that
        </div>
    );
};

renderPage(Page());

console.log('[ReBlox] Loaded');
