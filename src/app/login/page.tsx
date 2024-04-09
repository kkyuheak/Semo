"use client";
import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Input from "@/components/Input/Input";

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.loginWrapper}>
        <Input
          label="아이디"
          placeholder="아이디를 입력해주세요"
          name="id"
          id="id"
        />

        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          id="password"
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
