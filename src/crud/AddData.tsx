"use client";
import { db } from "@/Firebase";
import { addDoc, collection, query, where } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";

export default function Adddata() {
  let { register, handleSubmit } = useForm();

  const student = async (data: any) => {
    console.log(data);

    if (data.email == "") {
    } else {
      try {
        const collectionName = collection(db, "users");
        await addDoc(collectionName, data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(student)}>
        <div className="container">
          <div className="background" />
          <div className="content">
            <div className="header">
              <h1>Add student</h1>
            </div>

            <div className="form">
              <div className="field">
                <input
                  {...register("email")}
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  className="input"
                  placeholder=" "
                />
                <label htmlFor="email" className="label">
                  Email Address
                </label>
              </div>
              <div className="field">
                <input
                  {...register("name")}
                  autoComplete="off"
                  id="name"
                  name="name"
                  type="text"
                  className="input"
                  placeholder=" "
                />
                <label htmlFor="name" className="label">
                  Name
                </label>
              </div>

              <div className="field">
                <input
                  {...register("password")}
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="input"
                  placeholder=" "
                />
                <label htmlFor="password" className="label">
                  Password
                </label>
              </div>
              <div className="button-container">
                <button className="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
