"use client";

import Input from "@/components/Input/Input";
import React, { useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";

const Register = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [nickname, setNickName] = useState();

  return (
    <div className={styles.container}>
      <form className={styles.regiWrapper}>
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요"
          type="email"
          name="email"
          id="email"
        />

        <Input
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          name="nickname"
          id="nickname"
        />

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

        <button className={styles.regiBtn}>회원가입</button>
      </form>

      <div>
        <p className={styles.yesId}>
          <Link href={"/login"}>아이디가 있으면 여기로!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
