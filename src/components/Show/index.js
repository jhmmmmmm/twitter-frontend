import PropTypes from 'prop-types';

const Show = ({
  visible,
  isMount,
  children,
}) => (
  <div style={{ display: visible ? 'block' : 'none' }}>
    {(!isMount || visible) && children}
  </div>
);

Show.propTypes = {
  visible: PropTypes.bool.isRequired,
  isMount: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Show.defaultProps = {
  isMount: true,
};

export default Show;
