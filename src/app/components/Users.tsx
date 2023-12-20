export default async function Comments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const data = await res.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
