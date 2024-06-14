"use client";
import { Button } from "./ui/button";
import {
  GoogleAuthProvider,
  User,
  UserInfo,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebaseInit";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  //Função para realizar o login com o Google
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuário logado:", result.user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro na autenticação:", error);
    }
  };

  //Função para verificar se o usuário está logado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //Função para deslogar do sistema
  async function logout() {
    try {
      await signOut(auth);
      console.log("Logout realizado com sucesso.");
      router.push("/");
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
    }
  }

  return (
    <>
      {user ? (
        <Button
          onClick={() => logout()}
          className="text-white border-white border-[1px] rounded-lg hover:bg-white hover:text-black"
        >
          Olá {user.displayName}
        </Button>
      ) : (
        <Button
          onClick={() => googleLogin()}
          className="text-white border-white border-[1px] rounded-lg hover:bg-white hover:text-black"
        >
          Acessar
        </Button>
      )}
    </>
  );
}
