import { fetchUserPosts } from "@/actions/fetchPosts";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const SearchResultPage = async (props: {
    searchParams: SearchParams
  }) => {

const searchParams = await props.searchParams;

const userIdQuery = searchParams.query;
// 
  if (!userIdQuery) {
    return <div>No search query provided</div>;
  }
  const posts = await fetchUserPosts({ userId: userIdQuery });
  // console.log('posts', posts);

  return (
    <div>
      <h1 className="font-extrabold text-2xl my-10">Search results for User {userIdQuery}</h1>
      <ul className="space-y-8">
        {posts.map((post: any) => (
            <div key={post.id}>
                 <li className="font-bold" >{post.title}</li> 
                 <li className="font-medium">{post.body}</li> 
            </div>
        
        ))}
      </ul>
    </div>
  )
};

export default SearchResultPage;
