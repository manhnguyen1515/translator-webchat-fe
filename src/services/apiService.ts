import http from "../http-common";
import { LS_REFRESH_TOKEN, PAGE_SIGN_IN } from "../constants/constant";
import { LS_ACCESS_TOKEN } from "../constants/constant";
import { TRefreshTokenInput, TRefreshTokenOutput, eRefreshTokenError, eRegisterError } from "../constants/types";
import axios, { HttpStatusCode } from "axios";

function isUnauthorizedError(error: any) {
    const {
        response: { status, data: { data: dataMesg } },
    } = error;
    return status === 401 && dataMesg === null;
}

const refreshToken = (input: TRefreshTokenInput) => {
    return http.post<TRefreshTokenInput, TRefreshTokenOutput>(`/v1/api/auth/refreshToken`, refreshToken);
};

async function renewToken() {
    const refreshToken = localStorage.getItem(LS_REFRESH_TOKEN);

    if (!refreshToken)
        throw new Error('refresh token does not exist');

    const refreshPayload: TRefreshTokenInput = {
        refreshToken: refreshToken
    };

    let token = ""
    let newRefreshToken = ""
    try {
        const response = await ApiService.refreshToken(refreshPayload);
        token = response.data.accessToken;
        newRefreshToken = response.data.refreshToken;
        console.log("set token renew: ", token)
        localStorage.setItem(LS_REFRESH_TOKEN, newRefreshToken)
        localStorage.setItem(LS_ACCESS_TOKEN, token)
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === HttpStatusCode.Unauthorized) {
                return Promise.reject("Failed to refresh token!")
            }
        }
    }

    return [token, newRefreshToken];
}

const ApiService
    = {
    renewToken,
    refreshToken,
    isUnauthorizedError,
};

export default ApiService;