import { RichText } from 'prismic-reactjs';

const linkResolver = (doc) => {
  // Pretty URLs for known types
  if (doc.type === 'blog') return `/post/${doc.uid}`
  if (doc.type === 'page') return `/${doc.uid}`
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`
}
 
// A React component
export default function TextField({ document }) {
  return (
    <RichText render={document.data.text_field} linkResolver={linkResolver} />
  )
}