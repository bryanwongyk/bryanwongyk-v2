'use client';

import { FC, useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { RPC_INCREMENT_POST_VIEWS } from '../../repository/schema';
import { PostView } from '../../repository/entities/PostView';

interface ViewCounterProps {
  slug: string;
  allViews: PostView[];
  trackView?: boolean;
}

const ViewCounter: FC<ViewCounterProps> = ({ slug, allViews, trackView }) => {
  const supabase = createClientComponentClient();
  const [viewCount, setViewCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (trackView) {
      // Note: increment() appears to call twice in dev mode due to React Strict Mode
      const increment = async () => {
        const { data, error } = await supabase.rpc(RPC_INCREMENT_POST_VIEWS, {
          post_slug: slug,
        });
        if (error) {
          console.error(error);
        }
        return data;
      };
      increment().then((res) => {
        setViewCount(res);
      });
    } else {
      const slugStats = allViews && allViews.find((view) => view.slug === slug);
      setViewCount(slugStats?.views_count || 0);
    }
  }, []);

  return (
    <>
      {viewCount ? (
        <p className='font-subtitle text-sm text-neutral-400'>
          {viewCount} {viewCount ? 'views' : null}
        </p>
      ) : (
        <p className='font-subtitle text-sm text-neutral-400'>-</p>
      )}
    </>
  );
};

export default ViewCounter;
