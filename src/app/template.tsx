/**
 * Transição entre páginas: a cada navegação, um véu lavanda sobe
 * e descobre a página nova. Puro CSS (ver .veu em moldura.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="veu" aria-hidden="true">
        <svg className="veu__estrela" viewBox="0 0 34 34">
          <path d="M17 2.6c.9 8.4 2.7 12.4 13.6 14.4-10.9 1.8-12.7 5.8-13.6 14.4-.9-8.6-2.7-12.6-13.6-14.4C14.3 15 16.1 11 17 2.6z" />
        </svg>
      </div>
      <div className="pagina">{children}</div>
    </>
  );
}
