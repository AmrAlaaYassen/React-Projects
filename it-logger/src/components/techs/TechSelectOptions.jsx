import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';
const TechSelectOptions = ({ tech: { loading, techs }, getTechs }) => {
  useEffect(() => {
    getTechs();

    //eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map(technician => (
      <option
        key={technician.id}
        value={`${technician.firstName} ${technician.lastName}`}
      >
        {technician.firstName} {technician.lastName}
      </option>
    ))
  );
};

const mapStateToProps = state => ({
  tech: state.tech
});

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getTechs }
)(TechSelectOptions);
