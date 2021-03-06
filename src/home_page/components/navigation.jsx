import React from 'react';
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <span className='navbar-brand page-scroll' style={{'fontSize':'40px','fontWeight':'bold'}} >
            GooseFX
          </span>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/#about' className='page-scroll'>
                About US
              </a>
            </li>
            <li>
              <a href='/#team' className='page-scroll'>
                faq
              </a>
            </li>
            <li>
              <a href='/#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <a href='/swap'>
                Swap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
