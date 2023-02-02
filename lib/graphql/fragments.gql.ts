import { gql } from "@apollo/client";

export const ERROR = gql`
  fragment Error on Error {
    code
    message
  }
`;

export const LINK_COMPONENT = gql`
  fragment LinkComponent on ComponentSharedLink {
    id
    href
    text
    target
    icon {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    isDownload
    isExternal
  }
`;
export const PEOPLE = gql`
  fragment People on People {
    firstname
    lastname
    description
    email
    telephone
    tags {
      data {
        id
        attributes {
          name
        }
      }
    }
    picture {
      data {
        id
        attributes {
          url
          width
          height
          hash
          mime
          name
          provider
          size
        }
      }
    }
  }
`;

export const PERSON_COMPONENT = gql`
  fragment PersonComponent on ComponentBlockPersons {
    id
    person {
      data {
        id
        attributes {
          ...People
        }
      }
    }
  }
`;

export const TAGGED_PERSONS_COMPONENT = gql`
  fragment TaggedPersonsComponent on ComponentBlockTaggedPersons {
    id
    tag {
      data {
        id
      }
    }
  }
`;

export const RICH_TEXT_COMPONENT = gql`
  fragment RichTextComponent on ComponentBlockRichText {
    id
    content
  }
`;

export const ARTICLE_CAROUSEL_COMPONENT = gql`
  fragment ArticleCarouselComponent on ComponentBlockCarousel {
    id
    maxArticles
  }
`;

export const SPACING_COMPONENT = gql`
  fragment SpacingComponent on ComponentSharedSpacing {
    id
    width
    height
  }
`;

export const SUB_PAGE_NAVIGATION_COMPONENT = gql`
  fragment SubPageNavigationComponent on ComponentBlockSubPageNavigation {
    __typename
    id
    flat
  }
`;

export const ARTICLES_COMPONENT = gql`
  fragment ArticlesComponent on ComponentBlockArticles {
    id
    pageSize
  }
`;

export const FILE_FRAGMENT = gql`
  fragment FileFragment on UploadFileEntityResponse {
    data {
      id
      attributes {
        url
        width
        height
        hash
        mime
        name
        provider
        size
      }
    }
  }
`;
