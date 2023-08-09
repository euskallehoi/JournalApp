import { checkingCredentials } from "./authSlice"


export const checkingAutentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

    }
};

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

    }
}