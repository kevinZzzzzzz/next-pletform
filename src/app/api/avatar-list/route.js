const list = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(list), {
    headers: { "Content-Type": "application/json" },
  });
}
