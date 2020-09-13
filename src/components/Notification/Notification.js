import React from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = _ => (
  <StyledToastContainer
    position='bottom-center'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
)

const StyledToastContainer = styled(ToastContainer)(
  ({ theme }) => `
    @media (max-width: 768px) {
      width: 100% !important;
      padding: 0 5% !important;
    }
    width: 30% !important;
    .Toastify__toast {
      border-radius: 4px;
      box-shadow: 0px 2px 4px #00000026;
      margin: 0;
      min-height: 52px;
      color: ${theme.colors.white};
    }
    .Toastify__toast--success {
      background: ${theme.colors.green} 0% 0% no-repeat padding-box;
    }
    .Toastify__toast--error {
      background: ${theme.colors.red} 0% 0% no-repeat padding-box;
    }
    .Toastify__toast--warning {
      background: ${theme.colors.yellow} 0% 0% no-repeat padding-box;
    }
    .Toastify__toast--info {
      background: ${theme.colors.darkGray};
    }
  `
)

export { Notification }
