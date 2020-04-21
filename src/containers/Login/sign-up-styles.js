import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 9%;
  align-items: center;
  @media (max-width: 2500px) {
    width: 75%;
    align-content: center;
    align-items: center;
  }

  @media (max-width: 2000px) {
    width: 40%;
    align-content: center;
    align-items: center;
  }

  @media (max-width: 1700px) {
    width: 40%;
    align-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
    width: 100%;
    align-content: center;
    align-items: center;
  }

  @media (max-width: 555px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const FormStyle = styled.div`
  margin-right: 30%;
  margin-top: 20%;
  margin-bottom: 20%;
  margin-left: 10%;
  @media (max-width: 2000px) {
    margin-left: -20%;
  }
  @media (max-width: 1000px) {
    margin-left: -20%;
  }
  @media (max-width: 555px) {
    margin-left: -20%;
  }
  @media (max-width: 500px) {
    margin-left: -20%;
  }
`;
export const Title = styled.p`
  display: block;
  margin-left: 20%;
  margin-right: 10%;
  margin-top: -20%;
  font-size: 35px;
  margin-bottom: 7%;
  color: rgba(0, 0, 0, 0.85);
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
`;

export const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  margin-left: 20.2%;
  margin-bottom: 1%;
`;

export const Check = styled.div`
@media (max-width: 1000px) {
    margin-left: -2%;
  }
  @media (max-width: 555px) {
    margin-left: 20%;
  }
  @media (max-width: 500px) {
    margin-left: 20%;
  }
`;

export const Policy = styled.p`
  display: inline;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding-top: 10%;
`;

export const SignUp = styled.div`
  font-family: "Inter", sans-serif;
  border-radius: 4px;
  width: auto;
  @media (max-width: 2500px) {
    margin-left: 10%;
  }
  @media (max-width: 2000px) {
    margin-left: 10%;
  }
  @media (max-width: 1700px) {
    margin-left: 10%;
  }
  @media(max-width: 1000px) {
    margin-left: -2%
  }
  @media (max-width: 555px) {
    margin-left: 20%;
  }
  @media (max-width: 500px) {
    margin-left: 20%;
  }
`;

export const SignIn = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  margin-left: 5%;
  @media (max-width: 2500px) {
    margin-left: 10%;
  }
  @media (max-width: 2000px) {
    margin-left: 10%;
  }
  @media (max-width: 1700px) {
    margin-left: 10%;
  }
  @media (max-width: 1000px) {
    margin-left: 10%;
  }
  @media (max-width: 555px) {
   
  }
  @media (max-width: 500px) {
    
  }
`;

export const RadioStyle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  @media (max-width: 2500px) {
    
  }
  @media (max-width: 2000px) {
    
  }
  @media (max-width: 1700px) {
    margin-top: -10%;
  }
  @media (max-width: 1000px) {
    margin-left: 1%;
    margin-top: -20%;
  }
  @media (max-width: 555px) {
    margin-left: -0.5%;
   
  }
  @media (max-width: 500px) {
    margin-left: -0.5%;
    
  }
`;

export const CheckboxStyle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  @media (max-width: 2500px) {
    
    
  }
  @media (max-width: 2000px) {
    
  }
  @media (max-width: 1700px) {
    margin-top: -10%;
  }
  @media (max-width: 1000px) {
    margin-left: 1%;
    margin-top: -5%;
  }
  @media (max-width: 555px) {
    margin-left: -0.5%;
    
    
  }
  @media (max-width: 500px) {
    margin-left: -0.5%;
   
  }
`;

export const Logo = styled.img`
  width: 7%;
  float: right;
  @media (max-width: 2500px) {
    width: 10%;
  }
  @media (max-width: 2000px) {
    width: 10%;
  }
  @media (max-width: 1700px) {
    width: 10%;
  }
  @media (max-width: 1000px) {
    width: 10%;
  }
  @media (max-width: 555px) {
    margin-left: 10%;
  }
  @media (max-width: 500px) {
    width: 10%;
  }
`;
