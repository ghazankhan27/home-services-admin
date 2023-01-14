import Head from "next/head";
import { useState } from "react";
import { CategoriesList } from "../components/CategoriesList";
import { Menu } from "../components/Menu";
import { UsersList } from "../components/UsersList";
import { useLogin } from "../hooks/useLogin";

export default function Home() {
  const { loading: _loading, setUser } = useLogin();

  const [selected, setSelected] = useState(0);

  const menuItems = [
    { id: 0, name: "Users" },
    { id: 1, name: "Categories" },
  ];

  if (_loading) return <></>;

  return (
    <>
      <Head>
        <title>{menuItems[selected].name} | Home Services</title>
      </Head>
      <div className="py-4 px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2">
            <Menu
              selected={selected}
              setSelected={setSelected}
              items={menuItems}
              setUser={setUser}
            />
          </div>
          <div className="col-span-10">
            <div className={`${selected !== 0 && "hidden"}`}>
              <UsersList />
            </div>
            <div className={`${selected !== 1 && "hidden"}`}>
              <CategoriesList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
