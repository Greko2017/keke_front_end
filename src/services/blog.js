import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-eu-central-1.graphcms.com/v2/ckxyt1w0p2a6101wecbqhdbga/master"; //process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
// console.log(`graphqlAPI`, graphqlAPI);
const graphqlToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDE1NTQyMDYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NreHl0MXcwcDJhNjEwMXdlY2JxaGRiZ2EvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOTVlZDQ3ZTAtMTBiOS00ZWQzLTk2Y2UtYmRkZjc5OGRiYzEyIiwianRpIjoiY2t5NGF6bzZ1MDVjNDAxejM4dnQ0ZmF2ayJ9.S7zDx5LFXU8BoMNiOws-rPrE8tHh9lE6NDV0el2o1qV9dYeI1Y1eGwcGn5Eb7gjQfS843rm2NaxDS93gSrwIP1Jnz1mgVdSuNVc03sv5F5m5QV2q_IfSurAXFZ60S2dcxxIDSoR0NXfofmiwm4Fn84m2eWsxGs5S4whrt9-BsvNgffcgNt4ttHtMog648asiUFJNu-LB4b0GD0966eFb8ren2ld-1h4vDK-FjQbnLV-ch3kpYJOzqZw_TO8RAEx3Wp0eFlpKPf-NyzwUyEHia9mGu1SFZk62a6ou9kPuoJJrzPRTHZXNaCqqPT5gP1ttqNsZb6aVTYde-8nZGysl-fWzItSHAtPLvaX33mfIFzad8XLCe_-x2_l-Yl3opK_8q_l98OfAakRq2N3rxkO8EHuldz6pfOUJPf23cFwszQ2uoGG7jo5o2NZYseuExRddjViXGWmuIHsrOlX2itYt3hbz0yy7VtEf2auaZ9iC-n4nwEgcmybb_NLzKWbk9TNHUT01Eyp-PAt_y5hrsfwlgW1rtzmH-IgLZix6K3MHy9iCPfRq5YJl-d-mnq1EB-iYWzCjATN3Tbi3rjp6Vvw5ZeD75HCUiMgwWSPUH5H0G5KYwfjznXheVpiN2GkifwMVux7MktRJuzguq98jEUr3z8AabSvhYTCdh_nldYY4z3Y";
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            comments {
              name
              createdAt
              comment
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
        post {
          title
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getPostDetails = async (slug) => {
  // console.log(`getPostDetails`, slug);
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
        comments {
          name
          email
          createdAt
          comment
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  // console.log(`getPostDetails result:>>`, result);

  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj) => {
  console.log(`-- submitComment addPost`, obj);
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${"pk_383703c81af81675bab90a8661900b2dfaaf7abb7c615"}`,
    },
    body: JSON.stringify(obj),
  });
  console.log(result);
  return result;
};
const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${graphqlToken}`,
  },
});

export const addComment = async (obj) => {
  const { name, email, comment, slug } = obj;

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, {
      name: name,
      email: email,
      comment: comment,
      slug: slug,
    });
    return result;
  } catch (error) {
    console.error(`error add comment:>> ${error}`);
  }
};
export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};
