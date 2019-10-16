import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
const AddLogModal = ({addLog}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [techs, setTechs] = useState('');

  const onSubmit = () => {
    if (message === '' || techs === '') {
      M.toast({ html: 'Please Enter All Fields' });
    } else {
      const newLog = {
        message,
        attention,
        techs,
        date: new Date()
      };

      addLog(newLog);
      M.toast({ html: `Log Added by ${techs}` });
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='techs'
              value={techs}
              className='browser-default'
              onChange={e => setTechs(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(
  null,
  { addLog }
)(AddLogModal);
