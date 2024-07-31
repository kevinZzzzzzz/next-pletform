"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import Link from "next/link";

function Page(props: any) {
  const router = useRouter();
  return (
    <>
      <Button
        type="link"
        danger
        onClick={() => {
          router.push("/note");
        }}
      >
        Note
      </Button>
      <br />
      <Button
        type="link"
        onClick={() => {
          router.push("/test");
        }}
      >
        Test
      </Button>
    </>
  );
}
export default Page;
