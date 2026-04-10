import Image from "next/image";

const InfiniteScrollProjects = () => {
  return (
    <section className="py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative w-full">
          <div className="flex w-max gap-6 animate-infinite-scroll hover:[animation-play-state:paused]">
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((id, index) => (
              <div
                key={index}
                className="group relative w-[280px] md:min-w-[390px] shrink-0 overflow-hidden rounded-xl border border-gray-500 bg-white shadow-sm"
              >
                <div className="relative h-[130px] md:h-[180px] w-full bg-gray-100">
                  <Image
                    src={`/projects/${id}.webp`}
                    alt={`Miss kniz - Project ${id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default InfiniteScrollProjects;
