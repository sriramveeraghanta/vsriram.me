const posts = [
  {
    id: 1,
    title: "CSS tricks that makes web designing easy",
    href: "#",
    description:
      "Here are the some of the responsive web designing tricks you can use while building a website with any framework, which makes your work easy and flexible.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 22, 2017",
    datetime: "2017-03-22",
  },
  // More posts...
];

export default async function BlogPage() {
  return (
    <section>
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <div className="max-w-xl">
                    <div className="mt-2 flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={post.datetime}
                        className="text-gray-500 dark:text-white"
                      >
                        {post.date}
                      </time>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white line-clamp-3 h-[120px] overflow-hidden">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
