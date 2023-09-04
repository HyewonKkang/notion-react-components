export type ContentEditableChangeEvent = (text: string) => void;

function useContentEditable(onChange?: ContentEditableChangeEvent) {
  const handleTextChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const newText = e.currentTarget.innerHTML
      .replace(/<div>/g, '\n')
      .replace(/<\/div>/g, '')
      .replace(/<br>/g, '\n')
      .replace(/<br\/>/g, '\n')
      .trim();
    return newText;
  };

  const contentEditableProps = {
    contentEditable: true,
    spellCheck: true,
    suppressContentEditableWarning: true,
    onFocus: (e: React.ChangeEvent<HTMLDivElement>) => onChange?.(handleTextChange(e)),
    onBlur: (e: React.ChangeEvent<HTMLDivElement>) => onChange?.(handleTextChange(e)),
  };

  return { handleTextChange, contentEditableProps };
}

export default useContentEditable;
