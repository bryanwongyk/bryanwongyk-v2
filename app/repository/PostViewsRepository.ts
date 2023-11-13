import {
  createClientComponentClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { postViewsSchema } from './schema';
import { PostView } from './entities/PostView';

class PostViewsRepository {
  supabase: any;

  constructor() {
    this.supabase = createClientComponentClient();
  }

  getAllViews = async (): Promise<PostView[]> => {
    const { data, error } = await this.supabase
      .from(postViewsSchema.TABLE)
      .select(`${postViewsSchema.SLUG}, ${postViewsSchema.VIEWS_COUNT}`);
    console.log(data);
    if (error) {
      console.error(error);
    }
    return data as PostView[];
  };
}

export default new PostViewsRepository();
