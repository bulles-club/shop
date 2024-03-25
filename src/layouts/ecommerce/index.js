import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function EcommerceLayout({ children }) {
  return (
    <>
      {/* <Header /> */}

      {children}
    </>
  );
}

EcommerceLayout.propTypes = {
  children: PropTypes.node,
};
