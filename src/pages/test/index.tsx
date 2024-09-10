import * as React from 'react';
import PostService from '../../services/postServices';
import { ITestPostData } from '../../constants/types';

interface ITestPageProps {
}

const TestPage: React.FunctionComponent<ITestPageProps> = (props) => {
  const [posts, setPosts] = React.useState<ITestPostData[]>([]);
  React.useEffect(() => {
    PostService.findWithLimit(10).then((res) => {
      setPosts(res.data)
    })
  }, []);

  return <div className='relative'>
    <div>Post</div>
    {posts.length > 0 && posts.map((post, id) => {
      return (
        <div key={id} className='mt-5'>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
        </div>
      )
    })}
  </div>;
};

export default TestPage;
