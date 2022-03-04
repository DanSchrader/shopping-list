export default function Article({ article, onDelete }) {
  return (
    <li onClick={() => onDelete(article._id)} className="Article">
      {article.name.en}
    </li>
  );
}
