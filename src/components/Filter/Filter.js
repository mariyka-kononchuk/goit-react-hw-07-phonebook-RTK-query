import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <label className={s.label}>
      <span className={s.title}>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  )

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange:PropTypes.func.isRequired
};