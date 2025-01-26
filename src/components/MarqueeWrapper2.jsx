import { cn } from "../lib/utils";
import { Marquee } from "./utils/marquee";


const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 lg:w-80 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        " bg-gradient-to-r from-black/15 to-purple/20  shadow-2xl shadow-black/30 border-2 border-pink200/70 hover:",
        " hover:scale(105) animate-marquee text-white"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
      <img className="rounded-full w-10 h-10 lg:w-14 lg:h-14 object-cover shadow-2xl shadow-pink200" alt="" src={img} />
      <div className="flex flex-col">
          <figcaption className="text-sm font-medium font-medium-fgm">{name}</figcaption>
          <p className="text-xs font-medium font-medium-kgpr">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs lg:text-sm font-medium-kgpr">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeWrapper2() {
  return (
    <div className="relative flex  max-w-[1920px] bg-gradient-to-tr  w-full flex-col items-center justify-center  rounded-lg   ">
      <Marquee pauseOnHover className=" lg:mb-4 ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className=" ">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full  dark:from-background "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full dark:from-background"></div>
    </div>
  );
}