import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from '@vercel/remix';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(res => res.json());
  return json({ res });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen items-center justify-center p-20">
      {JSON.stringify(data)}
    </div>
  );
}