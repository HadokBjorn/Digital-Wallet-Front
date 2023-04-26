import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
    }
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #a328d6;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: 100%;
        padding: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: white;
    }
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: white;
        text-decoration: none;
        padding-top: 30px;
    }

    .center{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .loader {
      width: 20px;
      height: 20px;
      position: relative;
      left: -32px;
      border-radius: 50%;
      color: #fff;
      background: currentColor;
      box-shadow: 32px 0 , -32px 0 ,  64px 0;
    }

    .loader::after {
      content: '';
      position: absolute;
      left: -32px;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background:#fff;
      animation: move 3s linear infinite alternate;
    }

    @keyframes move {
      0% , 5%{
        left: -32px;
        width: 16px;
      }
      15% , 20%{
        left: -32px;
        width: 48px;
      }
      30% , 35%{
        left: 0px;
        width: 16px;
      }
      45% , 50%{
        left: 0px;
        width: 48px;
      }
      60% , 65%{
        left: 32px;
        width: 16px;
      }

      75% , 80% {
        left: 32px;
        width: 48px;
      }
      95%, 100% {
        left: 64px;
        width: 16px;
      }
    }
`

export default GlobalStyle