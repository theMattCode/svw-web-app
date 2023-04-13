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
      ...FileFragment
    }
    isDownload
    isExternal
  }
`;

export const LINK_LIST_COMPONENT = gql`
  fragment LinkListComponent on ComponentSharedLinkLists {
    id
    title
    titleUrl
    pageLinks {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
    shopLinks {
      data {
        id
        attributes {
          name
          url
        }
      }
    }
    links {
      ...LinkComponent
    }
  }
`;

export const TAG_FRAGMENT = gql`
  fragment Tag on TagEntity {
    id
    attributes {
      name
    }
  }
`;

export const TAGS_FRAGMENT = gql`
  fragment Tags on TagRelationResponseCollection {
    data {
      ...Tag
    }
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
      ...Tags
    }
    picture {
      ...FileFragment
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
        ...Tag
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

export const RICH_TEXT_TWO_COLUMN_COMPONENT = gql`
  fragment RichTextTwoColumnComponent on ComponentBlockRichTextTwoColumn {
    id
    leftContent
    rightContent
    leftFraction
    rightFraction
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

export const ARTICLES_COMPONENT = gql`
  fragment ArticlesComponent on ComponentBlockArticles {
    id
    pageSize
    tags {
      ...Tags
    }
  }
`;

export const ARTICLES_PREVIEW_LIST_COMPONENT = gql`
  fragment ArticlesPreviewListComponent on ComponentBlockArticlesPreviewList {
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

export const FUSSBALL_DE_WIDGET = gql`
  fragment FussballDeWidget on ComponentSharedFussballDeWidget {
    id
    key
  }
`;
