import { useState } from 'react';

function TextExpander({
  expanded = false,
  collapsedNumWords = 20,
  expandButtonText = 'Show more',
  collapseButtonText = 'Show less',
  buttonColor = '#1f09cd',
  children,
}) {
  const reduceText =
    children.split(' ').slice(0, collapsedNumWords).join(' ') + '... ';

  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div>
      {isExpanded ? children : reduceText}
      <button
        style={{
          color: `${buttonColor}`,
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
