import Heading from "./Heading";

export default function Loader() {
  return (
    <div className="h-screen fixed z-99 w-full bg-background ">
      <div className="h-full bg-primary-light w-full flex-col gap-4 flex items-center justify-center">
        <Heading
          normalText={"Be Hold"}
          highlightText={" it begins"}
          className="font-serif!"
        />
        <div className="flex  items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse [animation-delay:0ms]" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse [animation-delay:150ms]" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
