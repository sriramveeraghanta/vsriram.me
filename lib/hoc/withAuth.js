import React from "react";
// axios configurations
import { setAxiosHeader } from "config/axios_configurations";
// cookie
import {
  authTokenCheck,
  userDetailsCookieCheck,
  setUserDetails,
  setUserStore,
  userStoresCookieCheck,
} from "lib/cookie";
// redirect
import redirect from "lib/redirect";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    React.useEffect(() => {
      // Setting user details
      if (props.user) {
        setUserDetails(props.user);
      }
      if (props.user_store) {
        setUserStore(props.user_store);
      }
      if (props.token) {
        setAxiosHeader(props.token);
      }
    }, []);
    if (WrappedComponent.Layout) {
      return (
        <WrappedComponent.Layout>
          <WrappedComponent {...props} />
        </WrappedComponent.Layout>
      );
    }
    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx) => {
    const token = authTokenCheck(ctx);
    const user = userDetailsCookieCheck(ctx);

    if (token && user) {
      const componentProps =
        WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
      return { ...componentProps, token, user };
    } else {
      redirect(ctx, "/auth/login");
      return {};
    }
  };
  return Wrapper;
};

export default withAuth;
