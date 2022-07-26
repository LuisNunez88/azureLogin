// import { Link } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle, Form } from "reactstrap";

import "./css/login.css";

export const Login = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  let navigate = useNavigate();

  // Control is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/dashboard`);
    }
  }, []);

  // Login Azure authentication method popUp
  const onLogin = () =>
    instance
      .loginPopup()
      .then((value) => {
        if (value.account) {
          console.log(value.account.name);
          navigate(`/dashboard`);
        }
      })
      .catch((e) => console.log(e));

  return (
    <div className="blank-page">
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-body">
            <div className="auth-wrapper auth-basic px-2">
              <div className="auth-inner my-2">
                <Card className="mb-0">
                  <CardBody>
                    <CardTitle tag="h4" className="mb-1">
                      Welcome! 👋
                    </CardTitle>
                    <CardText className="mb-2">Please sign-in to your account</CardText>
                    <Form className="auth-login-form mt-2" onSubmit={(e) => e.preventDefault()}>
                      <Button color="primary" block onClick={onLogin}>
                        Sign in with Azure
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
