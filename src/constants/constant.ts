import { randomColor } from "../utils/helper"
import { TMessageData, TUserInfo, TUserLogin, eRegion } from "./types"

export const API_URL = "http://localhost:8080"
export const LS_ACCESS_TOKEN = "@accessToken"
export const LS_REFRESH_TOKEN = "@refreshToken"
export const PAGE_CHANGE_PASSWORD_EMAIL = "/changePw/email"
export const PAGE_CHANGE_PASSWORD_NEW = "/changePw/newPw"
export const PAGE_SIGN_UP = "/signup"
export const PAGE_SIGN_IN = "/signin"
export const PAGE_TEST = "/test"
export const PAGE_DEFAULT = "/*"
export const LOGIN_TITLE = 'Log in'
export const LOGIN_SUBTITLE = 'Likelion translate chat helps you connect and improve your business.'
export const LOGIN_BG_IMAGE = '/LoginPage.jpg'
export const LOGO_IMAGE_BLACK = '/LogoBlack.png'
export const LOGO_IMAGE_WHITE = '/LogoWhite.png'
export const THRESH_NO_CONTENT_IMG = '/NoContentImg.png'
export const LOGIN_USER_IDENTIFIER_TITLE = 'Email / Username'
export const LOGIN_USER_IDENTIFIER_PLACEHOLDER = 'Email or Username'
export const LOGIN_PASSWORD_TITLE = 'Password'
export const LOGIN_PASSWORD_PLACEHOLDER = 'Password'
export const LOGIN_WRONG_USER_IDENTIFIER_TEXT = 'Incorrect email or username. Please try again.'
export const LOGIN_WRONG_PASSWORD_TEXT = 'Incorrect password. Please try again.'
export const SPECIAL_CHARACTERS = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
export const PASSWORD_MIN_LENGTH = 8
export const PW_CHECK_MIN_LENGTH_TEXT = 'Must contain at least 8 characters.'
export const PW_CHECK_CAPITAL_TEXT = 'Must contain at least one uppercase letter.'
export const PW_CHECK_NUMBER_TEXT = 'Must contain at least one number.'
export const PW_CHECK_SPECIAL_CHAR_TEXT = 'Must contain at least one special character.'
export const REGISTER_TITLE = 'Sign Up'
export const REGISTER_SUBTITLE = `It's quick and easy.`
export const FORGET_PASS_MODAL_TITLE = 'Forget password'
export const FORGET_PASS_MODAL_CONTENT = 'Coming soon!!!'
export const REGISTER_EMAIL_TITLE = 'Email'
export const REGISTER_EMAIL_PLACEHOLDER = 'Ex: lilkelion@gmail.com'
export const REGISTER_WRONG_EMAIL_TEXT = 'Incorrect email or username. Please try again.'
export const REGISTER_EXISTED_EMAIL_TEXT = 'An account with this email address already exists. Please try again.'
export const REGISTER_USERNAME_TITLE = 'Username'
export const REGISTER_USERNAME_PLACEHOLDER = 'Ex: likelion@gmail.com'
export const REGISTER_WRONG_USERNAME_TEXT = 'An account with this username already exists. Please try again.'
export const REGISTER_NICKNAME_TITLE = 'Nickname'
export const REGISTER_NICKNAME_PLACEHOLDER = 'Ex: likelion24'
export const REGISTER_WRONG_NICKNAME_TEXT = `Nickname cannot contain 'admin' word. Please try again.`
export const REGISTER_PASS_TITLE = 'Password'
export const REGISTER_PASS_PLACEHOLDER = 'Password'
export const REGISTER_WRONG_PASS_TEXT = 'Incorrect password. Please try again.'
export const REGISTER_CONFIRM_PASS_TITLE = 'Confirm password'
export const REGISTER_CONFIRM_PASS_PLACEHOLDER = 'Password'
export const REGISTER_WRONG_CONFIRM_PASS_TEXT = 'Confirm password is not match. Please try again.'
export const CHANGE_PW_WRONG_PASS_TEXT = 'Incorrect password. Please try again.'
export const REGISTER_REGION_TITLE = 'Region'
export const RESP_STATUS_CODE_WRONG_API = 404
export const RESP_STATUS_CODE_USER_ERROR = 409
export const DEFAULT_USER_COLOR = randomColor()
export const PROFILE_MODAL_TITLE = 'User profile'
export const CHANGE_PW_EMAIL_TITLE = 'Forgot Password'
export const CHANGE_PW_EMAIL_SUBTITLE = 'Please enter the email you use to sign in to Likelion chat.'
export const CHANGE_PW_NEW_TITLE = 'Reset your Password'
export const CHANGE_PW_NEW_SUBTITLE = `Please create a new password that you don't use on any other site.`
export const CHANGE_PW_OTP_TITLE = 'Confirm OTP'
export const CHANGE_PW_OTP_SUBTITLE = 'An OTP has been sent to your email to set your password. Please enter the OTP here.'
export const CHANGE_OLD_PASS_TITLE = 'Current password'
export const CHANGE_NEW_PASS_TITLE = 'New password'
export const CHANGE_PW_WRONG_OLD_PASS_TEXT = 'Incorrect current password. Please try again.'
export const CHANGE_PW_WRONG_EMAIL_TEXT = 'Incorrect email. Please try again.'
export const OTP_TITLE = 'Please enter OTP here'
export const CHANGE_PW_WRONG_OTP_TEXT = 'Incorrect OTP. Please try again.'
export const CHANGE_PW_WRONG_OTP_PLACEHOLDER = 'Ex: 123456'
export const PAGE_CHAT_SESSION = "/chat"
export const SUPPORT_LANGUAGE = ["Vietnamese", "Korean"];

export const FAKE_LIST_USER: TUserInfo[] = [
    {
        userId: "id1",
        email: "1@gmail.com",
        nickname: "nickname1",
        regionCountry: eRegion.VN,
        username: "username1"
    },
    {
        userId: "id2",
        email: "2@gmail.com",
        nickname: "nickname2",
        regionCountry: eRegion.VN,
        username: "username2"
    },
    {
        userId: "id3",
        email: "3@gmail.com",
        nickname: "nickname3",
        regionCountry: eRegion.VN,
        username: "username3"
    },
    {
        userId: "id4",
        email: "4@gmail.com",
        nickname: "nickname4",
        regionCountry: eRegion.KR,
        username: "username4"
    },
    {
        userId: "id5",
        email: "5@gmail.com",
        nickname: "nickname5",
        regionCountry: eRegion.KR,
        username: "username5"
    },
    {
        userId: "id6",
        email: "6@gmail.com",
        nickname: "nickname6",
        regionCountry: eRegion.KR,
        username: "username6"
    }
]

export const FAKE_MESSAGE: TMessageData[] = [
    {
        messageId: 1,
        date: new Date("2024-07-05T03:24:00"),
        status: 'sent',
        text: 'Tin nhan 1',
        textVi: 'Tin nhan 1',
        textKo: '소식 1',
        userId: 'id1'
    },
    {
        messageId: 2,
        date: new Date("2024-07-05T03:25:00"),
        status: 'sent',
        text: 'Tin nhan 2',
        textVi: 'Tin nhan 2',
        textKo: '소식 2',
        userId: 'id2'
    },
    {
        messageId: 3,
        date: new Date("2024-07-05T03:26:00"),
        status: 'sent',
        text: 'Tin nhan 3',
        textVi: 'Tin nhan 3',
        textKo: '소식 3',
        userId: 'id1'
    },
    {
        messageId: 4,
        date: new Date("2024-07-05T03:27:00"),
        status: 'sent',
        text: 'Tin nhan 4',
        textVi: 'Tin nhan 4',
        textKo: '소식 4',
        userId: 'id2'
    },
    {
        messageId: 5,
        date: new Date("2024-07-05T03:26:00"),
        status: 'sent',
        text: 'Tin nhan 5',
        textVi: 'Tin nhan 5',
        textKo: '소식 5',
        userId: 'id1'
    },
    {
        messageId: 6,
        date: new Date("2024-07-05T03:27:00"),
        status: 'sent',
        text: 'Tin nhan 6',
        textVi: 'Tin nhan 6',
        textKo: '소식 6',
        userId: 'id2'
    }
] 

export const FAKE_USER_INFO: TUserLogin = {
    accessToken: "string",
    refreshToken: "string",
    user:
    {
      userId: "id1",
      email: "1@gmail.com",
      nickname: "nickname1",
      regionCountry: eRegion.VN,
      username: "username1"
    }
  }