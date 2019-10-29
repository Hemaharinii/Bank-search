import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from "@fortawesome/free-solid-svg-icons";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }

    handleOnClose = () => {
        if(this.timer) {
            clearTimeout(this.timer);
        }

        this.props.onClose();
    }

    componentDidMount() {
        let that = this;
        this.timer = setTimeout(() => {
            that.handleOnClose();
        }, 4000);
    }

    render() {
        const { errorCode, message, hasError } = this.props;
        
        return (
            <div className={`notification ${hasError ? 'show' : ''}`}>
                <div className="notification-header">
                    <h6>{errorCode !== 0 ? errorCode : '-----'}</h6>
                    <FontAwesomeIcon onClick={e => this.handleOnClose()} icon={icons.faWindowClose} />
                </div>
                <div className="notification-body">
                    <span>{message && message.length > 0 ? message : 'Error loading banks...'}</span>
                </div>
            </div>
        );
    }
}

export default Notification