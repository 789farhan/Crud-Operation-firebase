"use client";
import { db } from "@/Firebase";
import { updateDoc, doc } from "firebase/firestore";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "@nextui-org/spinner";

export default function UpdateData({ params }: { params: { id: any } }) {
  let { register, handleSubmit } = useForm();
  const [loading, setloading] = useState(false);
  const student = async (data: any) => {
    try {
      setloading(true);
      const docRef = doc(db, "users", params.id);
      await updateDoc(docRef, data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(student)}>
        <div className="container">
          <div className="background" />
          <div className="content">
            <div className="header">
              <h1>Update Student</h1>
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
                {loading ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  <>
                    <button className="button">Submit</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
