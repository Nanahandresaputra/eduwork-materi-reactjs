import React from 'react';

class ClassComponent extends React.Component {

    // cara kesatu :
    // constructor (props) {
    //     super(props) 

    //     this.state= {
    //         value:0
    //     }
    //     this.handlePlus = this.handlePlus.bind(this);
    //     this.handleMinus = this.handleMinus.bind(this);
    // }

    // handlePlus(){
    //     this.setState({value: this.state.value + 1})
    // }
    
    // handleMinus(){
    //     if (this.state.value > 0) {this.setState({value: this.state.value - 1})
    //     }
    // }


    // cara kedua yaitu dengan refactoring code supaya lebih simple tanpa terikat this dan bind
    state= {
            value:0
        }

    handlePlus= ()=>{
        this.setState({value: this.state.value + 1})
    }
    
    handleMinus= ()=>{
        if (this.state.value > 0) {this.setState({value: this.state.value - 1})
        }
    }

    render() {
        return(
            // tag html yg akan di render wajib mempunyai satu parent element
            <div> 
                <h1>ini dibuat dengan class component</h1>
                <h2>hello {this.props.nama}</h2>
                <button onClick={this.handleMinus}>-</button>
                <span>{' '}{this.state.value}{' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

// menambahkan default props
ClassComponent.defaultProps = {nama: 'sayang'}

// setelahnya wajib di export

export default ClassComponent;