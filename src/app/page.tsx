"use client";
import { db } from "@/Firebase";
import Adddata from "@/crud/AddData";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  where,
  query,
} from "firebase/firestore";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";


import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [students, setstudents] = useState<any>([]);
  const [loading, setloading] = useState(false);
  const [deleteID, setdeleteID] = useState("");
  const Getdata = async () => {
    try {
      setloading(true);
      const collectioName = collection(db, "users");
      const querySnapshot = await getDocs(collectioName);
      setloading(false);
      const fetchData: any[] = [];
      querySnapshot.forEach((doc) => {
        fetchData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setstudents(fetchData);
    } catch (error) {
      console.log(error, "exist in getdata function");
    }
  };

  useEffect(() => {
    Getdata();
  }, [students]);

  const DeleteStudent = async (id: any) => {
    try {
      setdeleteID(id);
      setloading(true);
      await deleteDoc(doc(db, "users", id));
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Adddata />
      <div className="mt-10">
        <h1 className="font-bold text-xl"> Firebase</h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  # ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
                <th scope="col" className="px-6 py-3">
                  Update
                </th>
              </tr>
            </thead>
            <tbody>
              {students?.map((item: any, index: number) => {
                return (
                  <>
                    <tr
                      key={index}
                      className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{item?.id}</td>
                      <td className="px-6 py-4">{item?.email}</td>
                      <td className="px-6 py-4">{item?.name}</td>
                      <td className="px-6 py-4">{item?.password}</td>
                      <td className="px-6 py-4">
                        {loading && deleteID == item.id ? (
                          <Spinner />
                        ) : (
                          <>
                            {" "}
                            <Button
                              onClick={() => {
                                DeleteStudent(item.id);
                                setstudents([...students]);
                              }}
                              radius="full"
                              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <Link href={"/updateform/" + item.id}>
                          <Button
                            radius="full"
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                          >
                            Update
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  </>
                ); 
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
