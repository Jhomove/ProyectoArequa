import React from 'react';

//Images
import Arequa from '../../img/arequa.png';

const styles = {
    width: 110,
    height: 35,    
}

const Logo = () => {
    return (
        <img className="logo" src={Arequa} alt="logo" style={styles}/>
    );
}

export default Logo;