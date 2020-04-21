import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Col, Row, Radio, Card, Form, Input, Checkbox, Button } from "antd";
import {
  Container,
  Title,
  Subtitle,
  Check,
  Policy,
  SignUp,
  SignIn,
  Logo,
  RadioStyle,
  FormStyle,
  CheckboxStyle,
} from "./sign-up-styles";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 15,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 5,
    },
  },
};

const logo = require("./icons/logo blue alt.png");
const logo2 = require("./icons/start_up.png");
const logo3 = require("./icons/sign-up copy4.png");

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Row>
      <Container>
        <Card>
          <Logo src={logo} />
          <Row span={11}>
            <Col flex="1 500px">
              <FormStyle>
                <Form
                  {...formItemLayout}
                  form={form}
                  name="register"
                  onFinish={onFinish}
                  scrollToFirstError
                >
                  <Title>Sign Up</Title>

                  <Subtitle>Username</Subtitle>

                  <Form.Item
                    name="username"
                    label=""
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                    style={{ marginLeft: "20%" }}
                  >
                    <Input
                      placeholder="Enter Username"
                      style={{
                        width: "90%",
                        marginLeft: "0.5%",
                        marginTop: "-20%",
                      }}
                      
                    />
                  </Form.Item>

                  <Subtitle>Email</Subtitle>

                  <Form.Item
                    name="email"
                    label=""
                    rules={[
                      {
                        type: "email",
                        message: "The input is not a valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                    style={{ marginLeft: "20%" }}
                  >
                    <Input
                      placeholder="Enter Email"
                      style={{
                        width: "90%",
                        marginLeft: "0.5%",
                        marginTop: "-20%",
                      }}
                    />
                  </Form.Item>

                  <Subtitle>Password</Subtitle>

                  <Form.Item
                    name="password"
                    label=""
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                    style={{ marginLeft: "20%" }}
                  >
                    <Input.Password
                      placeholder="Enter Password"
                      style={{
                        width: "90%",
                        marginLeft: "0.5%",
                        marginTop: "-20%",
                      }}
                    />
                  </Form.Item>

                  <Subtitle>Confirm Password</Subtitle>

                  <Form.Item
                    name="confirm"
                    label=""
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            "The two passwords that you entered do not match!"
                          );
                        },
                      }),
                    ]}
                    style={{ marginLeft: "20%" }}
                  >
                    <Input.Password
                      placeholder="Confirm Password"
                      style={{
                        width: "90%",
                        marginLeft: "0.5%",
                        marginTop: "-20%",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(" Please Accept Agreement"),
                      },
                    ]}
                    {...tailFormItemLayout}
                    style={{ marginLeft: "2%", marginBottom: "1%" }}
                  >
                    <Check>
                      <Checkbox>
                        <Policy>
                          I Accept the{" "}
                          <a href="">Terms of Use & Private Policies</a>
                        </Policy>
                      </Checkbox>
                    </Check>
                  </Form.Item>
                  <Form.Item
                    {...tailFormItemLayout}
                    style={{
                      marginLeft: "2%",
                      marginBottom: "1%",
                      marginTop: "10%",
                    }}
                  >
                    <SignUp>
                      <Button type="primary" htmlType="submit">
                        Sign Up
                      </Button>

                      <SignIn>Back to Sign In</SignIn>
                    </SignUp>
                  </Form.Item>
                </Form>
              </FormStyle>
            </Col>

            <Row span={10} style={{ marginTop: "15%", lineHeight: "30px" }}>
              <Col>
                <Radio.Group onChange={handleChange} value={value}>
                  <RadioStyle>
                    <p style={{ marginBottom: "-1%", fontSize: "12px" }}>
                      I am...
                    </p>
                    <Col span={10}>
                      <Radio value={1}>Just Browsing</Radio>
                    </Col>
                    <Col span={10}>
                      <Radio value={2}>Waiting to Start Internship</Radio>
                    </Col>
                  </RadioStyle>
                </Radio.Group>

                <Checkbox.Group
                  style={{
                    width: "100%",
                    marginTop: "10%",
                    lineHeight: "30px",
                  }}
                >
                  <CheckboxStyle>
                    <p style={{ marginBottom: "-0.5%", fontSize: "12px" }}>
                      I am...
                    </p>
                    <Row>
                      <Col>
                        <Checkbox value="A">Looking for Listings</Checkbox>
                      </Col>
                      <Col span={20}>
                        <Checkbox value="B">
                          Putting Property for Listings
                        </Checkbox>
                      </Col>
                    </Row>
                  </CheckboxStyle>
                </Checkbox.Group>
              </Col>
            </Row>
          </Row>
        </Card>
      </Container>
    </Row>
  );
};

ReactDOM.render(<RegistrationForm />, document.getElementById("container"));
