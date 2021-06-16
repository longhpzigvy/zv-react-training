import { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

const withAuth = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      this.shouldRedirect(this.props);
    }
    shouldComponentUpdate(nextProps) {
      this.shouldRedirect(nextProps);
      return true;
    }
    shouldRedirect(props) {
      const path = props.location.pathname;
      switch (props.isLoggedIn) {
        case true:
          if (path === "/" || path === "/login")
            this.props.history.push("/app");
          if (!props.isAdmin && path.indexOf("users") > -1)
            this.props.history.push("/app");
          break;
        case false:
          if (path === "/" || path.indexOf("app") > -1)
            this.props.history.push("/login");
          if (!props.isAdmin && path.indexOf("users") > -1)
            this.props.history.push("/login");
          break;
        default:
          break;
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.user ? true : false,
    isAdmin: state.authentication.user?.role === "Admin" ? true : false,
  };
};

export default compose(connect(mapStateToProps), withAuth);
