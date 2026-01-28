export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">{categoryName}</h1>

        <div className="flex gap-2">
          <p className="cursor-pointer hover:text-blue-500">Home /</p>
          <p>Category /</p>
          <p className="text-blue-500">{categoryName}</p>
        </div>
      </div>
    </div>
  );
}
