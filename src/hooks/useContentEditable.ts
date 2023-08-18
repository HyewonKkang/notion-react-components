export type ContentEditableChangeEvent = (text: string) => void;

function useContentEditable(onChange?: ContentEditableChangeEvent) {
  const handleTextChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const newText = e.currentTarget.innerHTML
      .replace(/<div>/g, '\n')
      .replace(/<\/div>/g, '')
      .replace(/<br>/g, '\n')
      .replace(/<br\/>/g, '\n')
      .trim();
    onChange?.(newText);
  };

  const contentEditableProps = {
    contentEditable: true,
    spellCheck: true,
    suppressContentEditableWarning: true,
    onInput: handleTextChange,
    onBlur: handleTextChange,
  };

  return { handleTextChange, contentEditableProps };
}

export default useContentEditable;
