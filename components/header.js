import {memo} from 'react';
import cn from 'classnames';

import Nav from './navbar';

const Header = ({sticky = true,formState}) => {
    return (
        <>
            <header className={cn({sticky})}>
                <Nav formState={formState}/>
            </header>

            <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          background: #fff;
          z-index: 20;
          border-bottom: 1px solid #eaeaea;
        }
        header.sticky {
          position: sticky;
          top: 0;
        }
        @media (max-width:480px){
        height:58px;
        } 
      `}</style>
        </>
    );
};

export default memo(Header);
