import PropTypes from "prop-types";

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <p>Welcome {props.username}</p>;
  //   } else {
  //     return <p>Please log in to continue </p>;
  //   }
  return props.isLoggedIn ? (
    <h3 className="welcome-message">
      Welcome {props.username}! Let&apos;s get started
    </h3>
  ) : (
    <h3 className="login-prompt">
      You are not logged in. Please log in to continue.
    </h3>
  );
}

UserGreeting.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

export default UserGreeting;
