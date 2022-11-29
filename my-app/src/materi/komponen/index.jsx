import React from 'react';
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalCOmponent from './pembahasan/FunctionalComponent';

class Komponen extends React.Component{
render() {
    return(
        <div>
            {/* <ClassComponent nama="sayang"/> */}
            {/* <FunctionalCOmponent nama="nana handre"/> */}
            {/* ada juga menambahkan nilai props secara default */}

            <ClassComponent/>
            <FunctionalCOmponent/>
        </div>
    )
}
};

export default Komponen;
