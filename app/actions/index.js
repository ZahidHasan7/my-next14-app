
'use server'
 import { signIn,signOut } from "../auth";
export async function dologin(formData) {
    const action=formData.get('action');
    await signIn(action, { redirect: "/home" });
    console.log(action);
}

export async function  dologout() {
    await signOut({ redirectTo: "/" });
}