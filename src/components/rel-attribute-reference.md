# HTML `rel` Attribute Reference

A quick reference table for all common `rel` values used in `<a>` and `<NavLink>` elements.

```
rel value         -> Meaning / Use Case

alternate         -> The link leads to an alternate version of the document (e.g., different language or format like RSS).
author            -> Link references the author of the document.
bookmark          -> Permanent URL used for bookmarking (rare use case).
external          -> Indicates the link is to an external site (semantic hint only).
help              -> Link to a help document or support page.
license           -> Link to licensing terms or conditions.
next              -> Indicates the next page in a paginated sequence.
prev              -> Indicates the previous page in a paginated sequence.
nofollow          -> Tells search engines not to follow this link or pass SEO authority.
noopener          -> Prevents access to `window.opener` when using `target="_blank"` (security).
noreferrer        -> Prevents sending the `Referer` header to the target site.
ugc               -> Identifies the link as User-Generated Content (e.g., comments, forums).
sponsored         -> Marks the link as a paid or sponsored one (for SEO transparency).
tag               -> Indicates the link is a tag reference (used in blog tagging systems).
```
