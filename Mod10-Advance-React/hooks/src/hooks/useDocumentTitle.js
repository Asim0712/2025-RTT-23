export default function useDocumentTitle(title) {
  // useEffect to update the document title
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}