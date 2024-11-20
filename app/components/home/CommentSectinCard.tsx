import { TimeAgo } from "@/app/util/helper";

export interface CommentProps {
  id: number;
  name: string;
  url: string;
  datePosted: Date;
  post: string;
}

interface CommentsSectinCardProps extends CommentProps {
  index: number;
  length: number;
}

export const CommentsSectinCard = ({ name, url, datePosted, post, index, length }: CommentsSectinCardProps) => (
  <form className="w-full">
    <div className="w-full px-3 my-2">
      <div className="border rounded-md p-3 ml-3 my-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <img
              src={url}
              className="object-cover w-8 h-8 rounded-full border-2 border-emerald-400 shadow-emerald-400"
              alt="Profile"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-black">{name}</h3>
                <span className="text-gray-500 text-sm">{TimeAgo(datePosted)}</span>
              </div>
              <p className="text-gray-600 mt-1">{post}</p>
            </div>
          </div>

          {index === length - 1 && (
            <div className="flex gap-3 items-center mt-3">
              <img
                src="https://avatars.githubusercontent.com/u/22263436?v=4"
                className="object-cover w-8 h-8 rounded-full border-2 border-emerald-400 shadow-emerald-400"
                alt="User"
              />
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white text-black"
                name="body"
                placeholder="Type Your Comment"
                required
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </form>
);
