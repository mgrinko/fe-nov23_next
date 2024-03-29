import { Metadata } from "next";

export default function Page({ params }: { params: { id: string } }) {
  return <h1>User {params.id}</h1>
}

export const metadata: Metadata = {
  title: "Users",
  description: "Generated by create next app",
};
