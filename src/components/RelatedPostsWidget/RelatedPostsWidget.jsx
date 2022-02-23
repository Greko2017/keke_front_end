import React from "react";
import RelatedPostsCard from "./RelatedPostsCard";
const articles = [
  {
    title: "Cras ornare tristique elit.",
    author: "John Doe",
    createdAt: "Nov 22, 2018",
    image: "/assets/images/blog/post-1.jpg",
    category: "Women",
    excerpt:
      "ed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero euaugue.",
    comments: [],
    slug: "john-doe",
  },
  {
    author: "John Doe",
    title: "Vivamus vestibulum ntulla necante.",
    createdAt: "Nov 22, 2018",
    image: "/assets/images/blog/post-2.jpg",
    category: "Women",
    excerpt:
      "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum eturna.",
    comments: [],
    slug: "john-doe-video",
  },
  {
    author: "Jane Doe",
    title: "Utaliquam sollicitudin leo.",
    createdAt: "Nov 22, 2018",
    image: "/assets/images/blog/post-4.jpg",
    category: "Travel",
    excerpt:
      "Praesent dapibus, neque id cursus faucibus, tortor nequeegestas auguae, eu vulputate magna eros eu erat. Aliquamerat volutpat. Nam dui mi, tincidunt quis, accumsanporttitor, facilisis luctus, metus.",
    comments: [
      { content: "ljslfnkjsnlf" },
      { content: "ljslfnkjsnlf" },
      { content: "ljslfnkjsnlf" },
      { content: "ljslfnkjsnlf" },
    ],
    slug: "jane-doe-video",
  },
  {
    author: "John Doe",
    title: "Fusce pellentesque suscipit.",
    createdAt: "Nov 22, 2018",
    image: "/assets/images/blog/post-5.jpg",
    category: "Travel",
    excerpt:
      "Aliquam erat volutpat. Nam dui mi, tincidunt quis,accumsan porttitor, facilisis luctus, metus. Phasellusultrices nulla quis nibh. Quisque a lectus. Donecconsectetuer ligula vulputate sem tristique cursus.",
    comments: [{ content: "ljslfnkjsnlf" }, { content: "ljslfnkjsnlf" }],
    slug: "john-doe-two-images",
  },
];
const RelatedPostsWidget = () => {
  return (
    <div className="related-posts">
      <h3 className="title">Related Posts</h3>

      <div
        className="owl-carousel owl-simple"
        data-toggle="owl"
        data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        }
                                    }
                                }'
      >
        {articles.map((article, index) => (
          <RelatedPostsCard key={index} post={article} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPostsWidget;
