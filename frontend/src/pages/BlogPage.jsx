import SingleBlog from "../components/SingleBlog";
function BlogPage() {
  // testing data
  const img =
    "https://fastly.picsum.photos/id/588/300/350.jpg?hmac=YRrHi-8lqTgJE_zxE2zgS6jg0V5IBibc4H54q0atZpU";

  const heading = "How to Read More Books in 2024?";
  const date = "17, January, 2023";
  const user = "Submitby: argorsi";

  // end of testing data

  return (
    <div className="container blogpage">
      <SingleBlog img={img} heading={heading} date={date} user={user} />
      <SingleBlog img={img} heading={heading} date={date} user={user} />
      <SingleBlog img={img} heading={heading} date={date} user={user} />
      <SingleBlog img={img} heading={heading} date={date} user={user} />
      <SingleBlog img={img} heading={heading} date={date} user={user} />
      <SingleBlog img={img} heading={heading} date={date} user={user} />
      <SingleBlog img={img} heading={heading} date={date} user={user} />
      <SingleBlog img={img} heading={heading} date={date} user={user} />
    </div>
  );
}

export default BlogPage;
