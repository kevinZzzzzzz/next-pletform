"use client";
import { Button } from "antd";
import React, { useState, useEffect, Fragment } from "react";

function TestPage(props: any) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<any>(null);

  const fakeFetch = (name: any) => {
    const tempMap: any = {
      Nick: "Nick123123123",
      Deb: "Deb123123123",
      Joe: "Joe123123123",
    };
    return new Promise((resolve) => {
      const random = Math.random();
      setTimeout(() => {
        resolve(tempMap[name] || "");
      }, random * 10000);
    });
  };
  useEffect(() => {
    // let canceled = false
    setLoading(true);

    fakeFetch(person).then((data: any) => {
      setData(data);
      setLoading(false);
    });

    return () => {};
  }, [person]);
  const handleClick = (name: string) => {
    setPerson(name);
  };
  return (
    <Fragment>
      <Button
        onClick={() => {
          handleClick("Nick");
        }}
      >
        Nick's Profile
      </Button>
      <Button
        onClick={() => {
          handleClick("Deb");
        }}
      >
        Deb's Profile
      </Button>
      <Button
        onClick={() => {
          handleClick("Joe");
        }}
      >
        Joe's Profile
      </Button>
      {person && (
        <>
          <h1>{person}</h1>
          <h2>{loading ? "loading...." : data}</h2>
        </>
      )}
    </Fragment>
  );
}
export default TestPage;
