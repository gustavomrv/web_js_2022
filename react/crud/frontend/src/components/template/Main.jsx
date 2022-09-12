import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header />
        <main className="content">
            Content
        </main>
    </React.Fragment>