export async function fetchUserPosts({ userId }: { userId: string | string[] | undefined }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const posts = await response.json();
  return posts;
}
