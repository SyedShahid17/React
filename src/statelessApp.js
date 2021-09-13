import React from 'react';

const Excompo = (props) => {
    return <h2>This is a stateless component example.</h2>
}

class Stateless extends React.Component{

    render(){
        return (
            <div>
                <Excompo />
            </div>
        )
    }
}

export default Stateless;