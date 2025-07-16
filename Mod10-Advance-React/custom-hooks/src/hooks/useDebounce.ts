
import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  // useEffect to update the document title
  useEffect(() => {
    document.title = title;
  }, [title]);
}