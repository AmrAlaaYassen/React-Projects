import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCurrent, updateLog } from '../../actions/logActions';
const EditLogModal = ({ current, deleteCurrent, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [techs, setTechs] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTechs(current.techs);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || techs === '') {
      M.toast({ html: 'Please Enter All Fields' });
    } else {
      updateLog({
        id: current.id,
        message,
        attention,
        techs,
        date: new Date()
      });
      M.toast({ html: `Log Update by ${techs}` });
      deleteCurrent();
      setMessage('');
      setAttention(false);
      setTechs('');
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
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
          href='!#'
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

EditLogModal.propTypes = {
  deleteCurrent: PropTypes.func.isRequired,
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object
};

const mapStateToProp = state => ({
  current: state.log.current
});

export default connect(
  mapStateToProp,
  { updateLog, deleteCurrent }
)(EditLogModal);
