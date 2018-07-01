import * as React from "react";

export class ModalWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }

    }

    componentDidMount() {

    }

    render() {
        if (!this.props.showModal)
            return null;
        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50,
            zIndex: 999,
            overflow: 'auto'
        };
        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            //minHeight: 500,
            margin: '0 auto',
            padding: 30,
            zIndex: 1001
        };
        return (
            <div className="backdrop" style={backdropStyle}>
                <div style={modalStyle}>
                    {this.props.children}
                    <div className="footer" style={{ textAlign: 'center' }}>
                        <button className="btn btn-sm btn-danger" onClick={this.props.onClose}>
                            Edit
                        </button>
                    </div>
                </div >
            </div >

        );
    }
}
