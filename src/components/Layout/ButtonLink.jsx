import PropTypes from 'prop-types';
import './style.css';

function ButtonLink(props) {
  const { style, children, href, ...restProps } = props;
  return (
    <button style={style} {...restProps}>
      <a href={href}>{children}</a>
    </button>
  );
}

ButtonLink.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  href: PropTypes.string,
  restProps: PropTypes.any,
};

export default ButtonLink;
