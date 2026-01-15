const FeedHeader = ({ title }) => {
  return (
    <header className="bg-background/80 border-border sticky top-0 z-40 border-b backdrop-blur-lg">
      <div className="flex h-14 items-center justify-center">
        <h1 className="text-foreground text-base font-semibold">{title}</h1>
      </div>
    </header>
  );
};

export default FeedHeader;
