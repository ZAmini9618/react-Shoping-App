import './modal.css';

const Modal = (props) => {
    let ModalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,.8)'
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (<>

        <div className="modal show fade" style={ModalStyle} >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 style={{ color: 'black', fontWeight: '700' }} className="modal-title">{props.title}</h5>
                        <button type="button" className="close-modal" onClick={props.hide} >X</button>

                    </div>
                    <div className="modal-body">
                        <p style={{ color: '#222' }}>{props.description}</p>
                        <span style={{ color: 'green' }}>قیمت:{numberWithCommas(props.price)}</span>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Modal;