import React from 'react';


const HeaderPage = () => {
    return (
        <div className="header-page" style={{ margin: '10px', display: 'flex' }}>
            <div style={{ width: '50%', textAlign: 'left',marginLeft:'5px' }}>
                <h4>
                    Task Name
                </h4>
            </div>
            <div style={{ width: '43%', textAlign: 'right' }}>
                <h4>
                    Status
                </h4>
            </div>
        </div>
    )
}

export default HeaderPage