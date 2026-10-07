export default function Loading() {
  return (
    <div
      className="container page-content"
      role="status"
      aria-label="Chargement de la page"
    >
      <div className="skeleton-block" />
      <div className="skeleton-block" />
      <span className="sr-only">Chargement…</span>
    </div>
  );
}
