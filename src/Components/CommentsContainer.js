import React from "react";

const commentsData = [
  {
    name: "Sumit Kumar",
    comment: "lorem ipsum loren this is the great thing in the life of a hero",
    reply: [],
  },
  {
    name: "Sumit Kumar",
    comment: "lorem ipsum loren this is the great thing in the life of a hero",
    reply: [
      {
        name: "Sumit Kumar",
        comment:
          "lorem ipsum loren this is the great thing in the life of a hero",
        reply: [
          {
            name: "Sumit Kumar",
            comment:
              "lorem ipsum loren this is the great thing in the life of a hero",
            reply: [
              {
                name: "Sumit Kumar",
                comment:
                  "lorem ipsum loren this is the great thing in the life of a hero",
                reply: [
                  {
                    name: "Sumit Kumar",
                    comment:
                      "lorem ipsum loren this is the great thing in the life of a hero",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sumit Kumar",
    comment: "lorem ipsum loren this is the great thing in the life of a hero",
    reply: [
      {
        name: "Sumit Kumar",
        comment:
          "lorem ipsum loren this is the great thing in the life of a hero",
        reply: [
          {
            name: "Sumit Kumar",
            comment:
              "lorem ipsum loren this is the great thing in the life of a hero",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sumit Kumar",
    comment: "lorem ipsum loren this is the great thing in the life of a hero",
    reply: [],
  },
  {
    name: "Sumit Kumar",
    comment: "lorem ipsum loren this is the great thing in the life of a hero",
    reply: [],
  },
  {
    name: "Sumit Kumar",
    comment: "lorem ipsum loren this is the great thing in the life of a hero",
    reply: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex m-1 p-1">
      <img
        className="w-8 h-8 m-2 rounded-full "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s"
        alt="userImage"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

//get the first level of comments from the commentsData
const CommentList = ({ comments }) =>
  comments.map((comment, index) => (
    <div key={index} className="shadow-sm">
      <Comment data={comment} />
      <div className="mx-5 p-1 border-l-2 border-l-purple-800 ">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));

const CommentsContainer = () => {
  return (
    <div>
      <div className="px-5 m-2">
        <h1 className="font-bold text-xl">Comments:</h1>
        <div>
          <CommentList comments={commentsData} />
        </div>
      </div>
    </div>
  );
};

export default CommentsContainer;
