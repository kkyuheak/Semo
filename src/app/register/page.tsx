"use client";

import Input from "@/components/Input/Input";
import React, { useEffect, useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
import axios from "axios";

const Register = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickName] = useState<string>("");

  // 비밀번호 검사 통과
  const [error, setError] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        id,
        password,
        email,
        nickname,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "nickname") {
      setNickName(value);
    } else if (name === "checkPassword") {
      setCheckPassword(value);
    }
  };

  useEffect(() => {
    if (password === checkPassword) {
      setError(false);
    } else {
      setError(true);
    }
  }, [password, checkPassword]);

  return (
    <div className={styles.container}>
      <form className={styles.regiWrapper} onSubmit={handleSubmit}>
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />

        <Input
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          name="nickname"
          id="nickname"
          value={nickname}
          onChange={handleChange}
        />

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

        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요"
          type="password"
          name="checkPassword"
          id="checkPassword"
          value={checkPassword}
          onChange={handleChange}
          error={error}
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
