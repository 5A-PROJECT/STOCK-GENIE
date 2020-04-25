import React, { useMemo } from 'react';
import styled from 'styled-components';
import MaterialChip from '../../atoms/Chip/MaterialChip';

const TagListWrapper = styled.span`
  display: flex;
`;

function TagList({ tags, slice = false }) {
  // slice = true면 최대 두개까지만 보여줌
  const sliceTags = useMemo(() => {
    if (slice) {
      return tags.slice(0, 2);
    }
    return tags;
  }, [tags, slice]);

  return (
    <TagListWrapper>
      {sliceTags && sliceTags.length > 0 ? (
        sliceTags.map((tag) => (
          <MaterialChip
            key={tag.id}
            label={tag.name}
            size="small"
            variant="outlined"
          />
        ))
      ) : (
        <MaterialChip
          label="태그를달아보세요"
          size="small"
          variant="outlined"
        />
      )}
    </TagListWrapper>
  );
}

export default TagList;
