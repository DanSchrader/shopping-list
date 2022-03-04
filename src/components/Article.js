export default function Article({ article, onDelete }) {
  return (
    <li onClick={() => onDelete(article._id)} class="Article">
      {article.name.en}
    </li>
  );
}
