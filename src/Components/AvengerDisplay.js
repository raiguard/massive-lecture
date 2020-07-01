import React from 'react';

class AvengerDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editView: false,
            superInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({ superInput: val });
    }

    toggleEdit = () => {
        this.setState({ editView: !this.state.editView })
    }

    render() {
        const { editView, superInput } = this.state,
              {avenger} = this.props;
              
        return (
            <div className='avenger-box'>
                <p>{avenger.name}</p>
                {!editView
                    ? <p>{avenger.superPower}</p>
                    : (
                        <>
                            <input value={superInput} onChange={e => this.handleInput(e.target.value)} />
                            <button>Submit</button>
                        </>
                    )
                }
                <button onClick={this.toggleEdit}>Edit SuperPower</button>
                <button>Snap</button>
            </div>
        )
    }
}

export default AvengerDisplay;