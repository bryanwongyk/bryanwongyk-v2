import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { postViewsSchema } from './schema';
import { PostView } from './entities/PostView';

class PostViewsRepository {
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  supabase: any;

  constructor() {
    this.supabase = createClientComponentClient();
  }

  getAllViews = async (): Promise<PostView[]> => {
    const { data, error } = await this.supabase
      .from(postViewsSchema.TABLE)
      .select(`${postViewsSchema.SLUG}, ${postViewsSchema.VIEWS_COUNT}`);
    if (error) {
      console.error(error);
    }
    return data as PostView[];
  };
}

export default new PostViewsRepository();
