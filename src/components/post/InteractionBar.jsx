import { useState } from "react";
import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";

export const InteractionButton = ({
  icon,
  count,
  onClick,
  isActive = false,
  activeColor = "text-foreground",
}) => {
  return (
    <button
      onClick={onClick}
      className={`transition-interaction hover:bg-secondary -ml-2 flex items-center gap-1.5 rounded-full p-2 ${isActive ? activeColor : "text-muted-foreground hover:text-foreground"} `}
    >
      {icon}
      {count !== undefined && count > 0 && (
        <span className="text-sm">{count}</span>
      )}
    </button>
  );
};

export const InteractionBar = ({ likes, comments, reposts, shares = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isReposted, setIsReposted] = useState(false);
  const [repostCount, setRepostCount] = useState(reposts);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleRepost = () => {
    setIsReposted(!isReposted);
    setRepostCount((prev) => (isReposted ? prev - 1 : prev + 1));
  };

  return (
    <div className="mt-3 flex items-center gap-1">
      <InteractionButton
        icon={
          <Heart
            className={`transition-interaction h-5 w-5 ${isLiked ? "fill-like animate-like-pop" : ""}`}
          />
        }
        count={likeCount}
        onClick={handleLike}
        isActive={isLiked}
        activeColor="text-like"
      />

      <InteractionButton
        icon={<MessageCircle className="h-5 w-5" />}
        count={comments}
      />

      <InteractionButton
        icon={<Repeat2 className="h-5 w-5" />}
        count={repostCount}
        onClick={handleRepost}
        isActive={isReposted}
        activeColor="text-repost"
      />

      <InteractionButton
        icon={<Send className="h-5 w-5" />}
        count={shares > 0 ? shares : undefined}
      />
    </div>
  );
};
