import { MoreHorizontal, BadgeCheck } from "lucide-react";
import UserAvatar from "./UserAvatar";
import InteractionBar from "./InteractionBar";

export const PostCard = ({ post }) => {
  return (
    <article className="border-border transition-interaction hover:bg-card/50 border-b px-4 py-3">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <UserAvatar name={post.username} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-foreground cursor-pointer font-semibold hover:underline">
                {post.username}
              </span>
              {post.isVerified && (
                <BadgeCheck className="h-4 w-4 fill-blue-500 text-blue-500" />
              )}
              <span className="text-muted-foreground text-sm">
                · {post.timeAgo}
              </span>
            </div>

            <button className="transition-interaction hover:bg-secondary text-muted-foreground hover:text-foreground -mr-1.5 rounded-full p-1.5">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Post Content */}
          <p className="text-foreground mt-1 break-words whitespace-pre-wrap">
            {post.content}
          </p>

          {/* Interaction Bar */}
          <InteractionBar
            likes={post.likes}
            comments={post.comments}
            reposts={post.reposts}
          />
        </div>
      </div>
    </article>
  );
};
