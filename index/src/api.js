export async function getReviews() {
  const response = await fetch(`http://127.0.0.1:8000/hello`);

  if (!response.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }

  const body = await response.json();
  return body;
}
