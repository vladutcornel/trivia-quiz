import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

/**
 * Render a Select form control, based on the provided values
 *
 * @param {*} values
 * @param {*} value
 * @param {Function} onChange
 * @returns {JSX.Element}
 * @constructor
 */
function Select({ values, value, onChange }) {
  let normalizedValues;
  if (values instanceof Array) {
    normalizedValues = values.map((current) => ({
      current,
      label: current,
    }));
  } else {
    normalizedValues = Object.keys(values).map((current) => {
      const label = values[current];
      if ((typeof current) === "string") {
        return {
          label,
          current,
        };
      }
      return current;
    });
  }

  return (
    <Form.Control as="select" value={value} onChange={onChange}>
      {normalizedValues.map(({ label, current }) => (
        <option key={current} value={current}>{label}</option>
      ))}
    </Form.Control>
  );
}

Select.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  values: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  value: null,
  onChange: () => {},
};

export default Select;
