import bg from "../../../assets/breadcrumb-bg.jpg";
const Blog = () => {
  return (
    <div>
      <div
        className="h-52 md:h-96"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-[#34cceb] bg-opacity-60 flex justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Blogs</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
