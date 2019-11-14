import React, { useEffect } from 'react';
import Templates from './../containers/routes';

export default function Sidebar(props) {
    useEffect(() => {
        document.getElementById('main-wrapper').classList.toggle('toggled');
        return () => {
            document.getElementById('main-wrapper').classList.remove('toggled');
        }
    }, []);

    return(
        <aside id="sidebar">
            <div className="sidebar-title">
                <h2>School of net</h2>
            </div>
            <div className="list-group">
                <a href="/" className="list-group-item">Home</a>
                { Templates.map((template, index) => (                    
                    <a href={template.path} className="list-group-item">{template.name}</a>
                ))}
            </div>
        </aside>
    );
}