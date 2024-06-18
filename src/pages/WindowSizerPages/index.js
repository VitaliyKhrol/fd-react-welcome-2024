import React from 'react';
import WindowSizer from '../../components/WindowSizer';

const WindowSizerPages = () => {

    return (
        <WindowSizer>
            {({ x, y }) => (
                    <div>
                        <section> Current width: {x} px</section>
                        <section> Current height: {y} px</section>
                    </div>
            )}
        </WindowSizer>

    );

}


export default WindowSizerPages;
