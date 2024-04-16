"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Input from "@/components/Input/Input";
import { SignInResponse, signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id && password) {
      try {
        setLoading(true);
        const response: SignInResponse | undefined = await signIn(
          "credentials",
          {
            id,
            password,
          }
        );

        console.log(response);
        console.log("로그인 성공");
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginWrapper} onSubmit={handleSubmit}>
        <Input
          label="아이디"
          placeholder="아이디를 입력해주세요"
          name="id"
          id="id"
          value={id}
          onChange={handleChange}
        />

        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />

        <button className={styles.loginBtn}>로그인</button>
      </form>

      <div>
        <p className={styles.noId}>
          <Link href={"/register"}>아이디가 없으신가요?</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
