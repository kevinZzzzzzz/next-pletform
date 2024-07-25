import styles from "./index.module.scss";

// 模拟数据
async function getData() {
  const result = await fetch(process.env.URL + "/api/avatar-list", {
    method: "GET",
  });
  if (result.ok) {
    return result.json();
  }
  return [];
}
export default async function HomePage() {
  const res = await getData();
  return (
    <>
      <h1 style={{ color: styles.primaryColor }}>HomePage</h1>
      <ul>
        {res.map((d: { title: string }, idx: number) => {
          return <li key={idx}>{d.title}</li>;
        })}
      </ul>
    </>
  );
}
